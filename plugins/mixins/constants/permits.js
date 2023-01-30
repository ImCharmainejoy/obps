export default {
  data () {
    return {
      plumbingItems: [
        {
          flex: 'xs12 sm12 md12 lg6',
          items: [
            {
              text: 'Water Closet',
              kind: 'water_kind',
              new: 'water_new_fixture',
              qty: 'water_qty'
            },
            {
              text: 'Floor Drain',
              kind: 'floor_drain_kind',
              new: 'floor_drain_new_fixture',
              qty: 'floor_drain_qty'
            },
            {
              text: 'Lavatories',
              kind: 'lavatories_kind',
              new: 'lavatories_new_fixture',
              qty: 'lavatories_qty'
            },
            {
              text: 'Kitchen Sink',
              kind: 'kitchen_sink_kind',
              new: 'kitchen_sink_new_fixture',
              qty: 'kitchen_sink_qty'
            },
            {
              text: 'Faucet',
              kind: 'faucet_kind',
              new: 'faucet_new_fixture',
              qty: 'faucet_qty'
            },
            {
              text: 'Shower Head',
              kind: 'shower_kind',
              new: 'shower_new_fixture',
              qty: 'shower_qty'
            },
            {
              text: 'Water Meter',
              kind: 'water_meter_kind',
              new: 'water_meter_new_fixture',
              qty: 'water_meter_qty'
            },
            {
              text: 'Grease Trap',
              kind: 'grease_trap_kind',
              new: 'grease_trap_new_fixture',
              qty: 'grease_trap_qty'
            },
            {
              text: 'Bath Tubs',
              kind: 'bath_tubs_kind',
              new: 'bath_tubs_new_fixture',
              qty: 'bath_tubs_qty'
            },
            {
              text: 'Slop Sink',
              kind: 'slop_sink_kind',
              new: 'slop_sink_new_fixture',
              qty: 'slop_sink_qty'
            },
            {
              text: 'Urinal',
              kind: 'urinal_kind',
              new: 'urinal_new_fixture',
              qty: 'urinal_qty'
            },
            {
              text: 'Airconditioning Unit',
              kind: 'aircon_unit_kind',
              new: 'aircon_unit_new_fixture',
              qty: 'aircon_unit_qty'
            },
            {
              text: 'Water Tank/Reservoir',
              kind: 'water_tank_kind',
              new: 'water_tank_new_fixture',
              qty: 'water_tank_qty'
            }
          ]
        },
        {
          flex: 'xs12 sm12 md12 lg6',
          items: [
            {
              text: 'Bidet',
              kind: 'bidet_kind',
              new: 'bidet_new_fixture',
              qty: 'bidet_qty'
            },
            {
              text: 'Laundry Trays',
              kind: 'laundry_kind',
              new: 'laundry_new_fixture',
              qty: 'laundry_qty'
            },
            {
              text: 'Dental Cuspidator',
              kind: 'dental_kind',
              new: 'dental_new_fixture',
              qty: 'dental_qty'
            },
            {
              text: 'Gas Heater',
              kind: 'gas_heater_kind',
              new: 'gas_heater_new_fixture',
              qty: 'gas_heater_qty'
            },
            {
              text: 'Electric Heater',
              kind: 'electric_heater_kind',
              new: 'electric_heater_new_fixture',
              qty: 'electric_heater_qty'
            },
            {
              text: 'Water Boiler',
              kind: 'water_boiler_kind',
              new: 'water_boiler_new_fixture',
              qty: 'water_boiler_qty'
            },
            {
              text: 'Drinking Fountain',
              kind: 'drinking_fountain_kind',
              new: 'drinking_fountain_new_fixture',
              qty: 'drinking_fountain_qty'
            },
            {
              text: 'Bar Sink',
              kind: 'bar_sink_kind',
              new: 'bar_sink_new_fixture',
              qty: 'bar_sink_qty'
            },
            {
              text: 'Soda Fountain Sink',
              kind: 'soda_fountain_sink_kind',
              new: 'soda_fountain_sink_new_fixture',
              qty: 'soda_fountain_sink_qty'
            },
            {
              text: 'Laboratory Sink',
              kind: 'laboratory_sink_kind',
              new: 'laboratory_sink_new_fixture',
              qty: 'laboratory_sink_qty'
            },
            {
              text: 'Sterilizer',
              kind: 'sterilizer_kind',
              new: 'sterilizer_new_fixture',
              qty: 'sterilizer_qty'
            },
            {
              text: 'Swimming Pool',
              kind: 'swimming_pool_kind',
              new: 'swimming_pool_new_fixture',
              qty: 'swimming_pool_qty'
            },
            {
              text: 'R.C.S volume',
              kind: 'rcs_volume_kind',
              new: 'rcs_volume_new_fixture',
              qty: 'rcs_volume_qty',
              specific: 'rcs_volume_specific'
            }
          ]
        }
      ],
      mechanicalItems: [
      {
        flex: 'xs12 md4',
        items: [{
          text: 'Boiler',
          type: 'boiler_type',
          value: 'Boiler'
        },
        {
          text: 'Pressure Vessels',
          type: 'pressure_vessel_type',
          value: 'Pressure Vessels'
        },
        {
          text: 'Internal Combustion Engine',
          type: 'internal_combustion_type',
          value: 'Internal Combustion Engine'
        },
        {
          text: 'Refrigeration & Ice Making',
          type: 'ref_ice_making_type',
          value: 'Refrigeration & Ice Making'
        },
        {
          text: 'Window Type Air-conditoning',
          type: 'aircon_window_type',
          value: 'Window Type Air-conditoning'
        },
        {
          text: 'Package Air Condition Unit',
          type: 'aircon_unit_type',
          value: 'Package Air Condition Unit'
        }]
      },
      {
        flex: 'xs12 md4',
        items: [{
          text: 'Central Air-conditioning',
          type: 'central_aircon_unit_type',
          value: 'Central Air-conditioning'
        },
        {
          text: 'Mechanical Ventillation',
          type: 'mech_ventillation_type',
          value: 'Mechanical Ventillation'
        },
        {
          text: 'Escalator',
          type: 'escalator_type',
          value: 'Escalator'
        },
        {
          text: 'Moving Sidewalk',
          type: 'moving_sidewalk_type',
          value: 'Moving Sidewalk'
        },
        {
          text: 'Freight Elevator',
          type: 'freight_elevator_type',
          value: 'Freight Elevator'
        },
        {
          text: 'Passenger Elevator',
          type: 'passenger_elevator_type',
          value: 'Passenger Elevator'
        },
        {
          text: 'Cable Car',
          type: 'cable_car_type',
          value: 'Cable Car'
        }]
      },
      {
        flex: 'xs12 md4',
        items: [{
          text: 'Dumb Water',
          type: 'dumb_water_type',
          value: 'Dumb Water'
        },
        {
          text: 'Pumps',
          type: 'pumps_type',
          value: 'Pumps'
        },
        {
          text: 'Compressed Air, Vacuum, Institutional And/or Industrial Gas',
          type: 'compressed_air_type',
          value: 'Compressed Air'
        },
        {
          text: 'Pheumatics Tubes, Conveyors And/Or Monorails',
          type: 'pheumatic_tubes_type',
          value: 'Pheumatics Tubes'
        },
        {
          text: 'Funicular',
          type: 'funicular_type',
          value: 'Funicular'
        }]
      }],
      sanitaryItems: [
      {
        flex: 'xs12',
        title: 'WATER SUPPLY',
        items: [{
          text: 'Shallow Well',
          type: 'shallow_well_type'
        },
        {
          text: 'Deep Well and Pump Set',
          type: 'deep_well_type'
        },
        {
          text: 'City/Municipal Water System',
          type: 'city_water_type'
        }]
      }],
      sanitaryDisposalItems: [
      {
        flex: 'xs12 md6',
        title: 'SYSTEM OF DISPOSAL:',
        items: [{
          text: 'Waste Water Treatment Plant',
          type: 'waste_water_type'
        },
        {
          text: 'Imhoff Tank',
          type: 'imhoff_tank_type'
        },
        {
          text: 'Sanitary Sewer Connection',
          type: 'sanitary_type'
        },
        {
          text: 'Sub-surface and Filter',
          type: 'sub_surface_type'
        }]
      },
      {
        flex: 'xs12 md6',
        items: [{
          text: 'Surface Drainage',
          type: 'surface_drainage_type'
        },
        {
          text: 'Street Canal',
          type: 'street_canal_type'
        },
        {
          text: 'Water Course',
          type: 'water_course_type'
        }]
      }],
      electronicsItems: [
      {
        flex: 'xs12 md4',
        items: [{
          text: 'Telecommunication System',
          type: 'telecom_system_type'
        },
        {
          text: 'Broadcasting System',
          type: 'broadcast_system_type'
        },
        {
          text: 'Television System',
          type: 'tv_system_type'
        },
        {
          text: 'Information Technology System',
          type: 'it_system_type'
        },
        {
          text: 'Security And Alarm System',
          type: 'security_alarm_type'
        }]
      },
      {
        flex: 'xs12 md4',
        items: [{
          text: 'Electronics Fire Alarm System',
          type: 'fire_alarm_type'
        },
        {
          text: 'Sound Communication System',
          type: 'sound_com_type'
        },
        {
          text: 'Centralized Clock System',
          type: 'central_clock_type'
        },
        {
          text: 'Sound System',
          type: 'sound_type'
        },
        {
          text: 'Electronics Control And Conveyor System',
          type: 'control_conveyor_type'
        }]
      },
      {
        flex: 'xs12 md4',
        items: [{
          text: 'Electronics Computerized Process Controls Automation System',
          type: 'computer_process_type'
        },
        {
          text: 'Building Automation Management & Control System',
          type: 'auto_mngt_control_type'
        }]
      }],
      electricalItems: [{
        flex: 'xs12 md6',
        title: 'NUMBER OF OUTLETS',
        items: [{
          flex: 'xs12 md6',
          items: [{
            text: 'Light',
            type: 'light'
          },
          {
            text: 'Convenience/receptacle',
            type: 'receptacle'
          },
          {
            text: 'Spo. Aircon',
            type: 'aircon'
          }]
        },
        {
          flex: 'xs12 md6',
          items: [{
            text: 'Spo Cooking Unit',
            type: 'cooking_unit'
          },
          {
            text: 'Spo. Cooking Heater',
            type: 'cooking_heater'
          },
          {
            text: 'Spo Water Pump',
            type: 'water_pump'
          }]
        }]
      },
      {
        flex: 'xs12 md6',
        title: 'NUMBER OF EQUIPMENT/WIRING DEVICES',
        items: [{
          flex: 'xs12 md6',
          items: [{
            text: 'Toggle Switch',
            type: 'toggle_switch'
          },
          {
            text: 'bells Buzzer',
            type: 'bells_buzzer'
          },
          {
            text: 'Push Button',
            type: 'push_button'
          }]
        },
        {
          flex: 'xs12 md6',
          items: [{
            text: 'fire Alarm/smoke Detectors',
            type: 'alarms'
          }]
        }]
      }],
      docsItems: [{
        flex: 'xs12',
        title: 'The following documents below need your signature:',
        items: [
        {
          text: 'Application Letter'
        },
        {
          text: 'Unified Application for Building Permit'
        },
        {
          text: 'City / Municipality Fire Marshall Endorsement'
        },
        {
          text: 'Application for Plumbing Permit'
        },
        {
          text: 'Application for Electrical Permit'
        },
        {
          text: 'Application for Mechanical Permit'
        },
        {
          text: 'Application for Electronics Permit'
        },
        {
          text: 'Application for Sanitary Permit'
        }]
      },
      {
        flex: 'xs12',
        title: 'The following documents below need notarization:',
        items: [{
          text: 'Unified Application for Building Permit'
        },
        {
          text: 'Application for Location Clearance'
        }]
      }]
    }
  }
}