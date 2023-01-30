<template>
  <v-flex>
    <div style="border: 1px solid #999999">
    <vl-map 
      :load-tiles-while-animating="true" 
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      @click="!isMapDisabled ? options.clickCoordinate = $event.coordinate : ''"
      style="height: 250px">
      <vl-view 
        :zoom.sync="options.zoom"
        :center.sync="customForm.id ? setCenter(customForm): options.center"
        :rotation.sync="options.rotation"
      ></vl-view>

      <vl-geoloc @update:position="!isMapDisabled ? options.geolocPosition = $event : ''">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="hasCoordinates"></vl-geom-point>
            <vl-style>
              <vl-style-icon src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png" :anchor="[0.49, 0.9]" :scale="0.1"></vl-style-icon>
            </vl-style>
          </vl-feature>

          <vl-feature>
            <vl-geom-point :coordinates="hasCoordinates"></vl-geom-point>
            <vl-style>
              <vl-style-icon src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png" :anchor="[0.49, 0.9]" :scale="0.1"></vl-style-icon>
            </vl-style>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

    </vl-map>
  </div>
  </v-flex>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  import { isEmpty, isUndefined } from 'lodash'

  export default {
    props: {
      customForm: Object,
      customData: Object,
      isMapDisabled: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      options: {
        clickCoordinate: [],
        zoom: 14.8,
        center: [125.59569, 7.064905],
        rotation: 0,
        geolocPosition: [],
        extent: [124.5884557833878, 9.079063122945769, 124.82109499828717, 9.259461868809709]
      }
    }),
    mixins: [Global],
    watch: {
      'options.clickCoordinate': {
        handler (val) {
          let payload = {
            lng: this.options.clickCoordinate[0],
            lat: this.options.clickCoordinate[1]
          }
          if (!this.isMapDisabled) {
            this.$emit('customData', payload)
          }
        },
        deep: true
      },
      'customForm': {
        handler (val) {
          if (val.barangay_name) {
            let payload = {
              lng: Number(val.barangay_name.long),
              lat: Number(val.barangay_name.lat)
            }
            if (!this.isMapDisabled) {
              this.$emit('customData', payload)
            }
            this.options.clickCoordinate[0] = val.barangay_name ? Number(val.barangay_name.long) : 125.59569
            this.options.clickCoordinate[1] = val.barangay_name ? Number(val.barangay_name.lat) : 7.064905
            this.options.center = [Number(val.barangay_name.long), Number(val.barangay_name.lat)]
            this.setClickCoordinates()
          }
        },
        deep: true
      }
    },
    computed: {
      hasCoordinates () {
        if (!isEmpty(this.options.clickCoordinate)) {
          return this.options.clickCoordinate
        } else {
          return this.options.center
        }
      }
    },
    methods: {
      setCenter (payload) {
        let lng = payload.long
        let lat = payload.lat
        let center = [lng, lat]
        return center
      },
      setClickCoordinates () {
        if (!isUndefined(this.customForm.id)) {
          this.options.clickCoordinate = this.setCenter(this.customForm)
        }
      },
      mounted () {
        this.setClickCoordinates()
      }
    }
  }
</script>
