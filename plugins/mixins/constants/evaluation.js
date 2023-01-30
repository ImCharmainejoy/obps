export default {
  data () {
    return {
      mechanicalItems: [
      	{
          label: 'a. Location Plan and Key Plan',
          val: 'Location Plan and Key Plan',
          key: 'loc_plan_key'
        },
        {
          label: `b. General Layout Plan for each floor, drawn to a scale of not less
          than 1:100, indicating the equipment in heavier lines than the
          building outline with names of machinery and corresponding
          brake horsepower shall be indicated.`,
          val: `General Layout Plan for each floor, drawn toa scale of not less
          than 1:100, indicating the equipment in heavier lines than the
          building outline with names of machinery and corresponding
          brake horsepower shall be indicated.`,
          key: 'general_key'
        },
        {
          label: `c. Longitudinal and Transverse Sections of building and equipment
          base on the section lines drawn to scale of at least 1:100 showing
          inter-floor relations and defining the manner of support of
          machines/equipment. Sections shall run longitudinally and
          transversely through the building length or width other than
          particularly detailed section for each machinery/equipment (fired
          and unfired pressure vessel, elevator, escalator, dumbwaiter,
          etc),`,
          val: `Longitudinal and Transverse Sections of building and equipment
          base on the section lines drawn to scale of at least 1:100 showing
          inter-floor relations and defining the manner of support of
          machines/equipment. Sections shall run longitudinally and
          transversely through the building length or width other than
          particularly detailed section for each machinery/equipment (fired
          and unfired pressure vessel, elevator, escalator, dumbwaiter,
          etc)`,
          key: 'longitudinal_key'
        },
        {
          label: `d. Isometric drawing of gas, fuel, oil system showing: Assembly of
          Legend and General Notes, Capacity per outlet and Complete individual piping system`,
          val: `Isometric drawing of gas, fue, ol system showing: Assembly of
          Legend and General Notes, Capacity per outlet and Complete individual piping system`,
          key: 'isometric_key'
        },
        {
          label: `e. Plans drawn to scale of 1:100 indicating location of store rooms,
          fuel tanks, fire extinguishing systems, fire doors, fire escape
          ladders and other protective faciities.`,
          val: `Plans drawn to scale of 1:100 indicating location of store rooms
          fuel tanks, fire extinguishing systems, fire doors, fire escape
          ladders and other protective faciities.`,
          key: 'plans_drawn_key'
        },
        {
          label: `f. Detailed drawings of all duct work installations, indicating
          dampers, controls, filters, fireproofing, acoustical and thermal
          insulation.`,
          val: `Detailed drawings of all duct work installations, indicating
          dampers, controls, filters, fireproofing, acoustical and thermal
          insulation.`,
          key: 'detailed_drawings_key'
        },
        {
          label: `g. Detailed Plans of machinery foundations and supports drawn to
          scale of at least 1:50.`,
          val: `Detailed Plans of machinery foundations and supports drawn to
          scale of at least 1:50.`,
          key: 'detailed_plans_key'
        },
        {
          label: `h. Detailed Plans of boilers and pressure vessels witha working
          pressure of above 70 kPa regardless of kilowatt rating.`,
          val: `Detailed Plans of boilers and pressure vessels witha working
          pressure of above 70 kPa regardless of kilowatt rating.`,
          key: 'detailed_boilers_key'
        },
        {
          label: `i. Design Computations and Detailed Plans of elevators, escalators, and the like drawn to scale of 1:50.`,
          val: `Design Computations and Detailed Plans of elevators, escalators, and the like drawn to scale of 1:50.`,
          key: 'detailed_computations_key'
        },
        {
          label: `j. Forall installations, additions or alterations involving machinery
          of at most 14.9 kW, the signature of a duly licensed Mechanical
          Engineer shall be sufficient except fired and unfired pressure
          vessels, elevators, escalators, dumbwaiters,
          central/split/packaged type air conditioners and piping systems
          of steam, gas or fuels.`,
          val: `Forall installations, additions or alterations involving machinery
          of at most 14.9 kW, the signature of a duly licensed Mechanical
          Engineer shall be sufficient except fired and unfired pressure
          vessels, elevators, escalators, dumbwaiters,
          central/split/packaged type air conditioners and piping systems
          of steam, gas or fuels.`,
          key: 'forall_install_key'
        },
        {
          label: `k. Detailed plans of fire suppression systems, location of automatic
          and smoke detectors and alarm and initiating devices use to
          monitor the conditions that are essential for the proper
          operation including switches for the position of gate valves as
          well as alert and evacuation signals; the detailed layout of the
          entire safe area to be protected and the heat/smoke ventilation
          system.`,
          val: `Detailed plans of fire suppression systems, location of automatic
          and smoke detectors and alarm and initiating devices use to
          monitor the conditions that are essential for the proper
          operation including switches for the position of gate valves as
          well as alert and evacuation signals; the detailed layout of the
          entire safe area to be protected and the heat/smoke ventilation
          system.`,
          key: 'detailed_fire_key'
        }
      ],
      geodeticItems: [
        {
          label: 'a. Vicinity Map/Location Plan',
          val: 'Vicinity Map/Location Plan',
          key: 'vicinity_map_key'
        },
        {
          label: 'a. Lot Plan',
          val: 'Lot Plan',
          key: 'lot_plan_key'
        },
        {
          label: 'c. Relocation Survey Plan and Report',
          val: 'Relocation Survey Plan and Report',
          key: 'relocation_plan_key'
        },
        {
          label: 'd. Line and Grade',
          val: 'Line and Grade',
          key: 'line_grade_key'
        },
        {
          label: 'e. Detailed Topographic Plan of the site and immediate vicinity',
          val: 'Detailed Topographic Plan of the site and immediate vicinity',
          key: 'detailed_topographic_key'
        }
      ],
      geodeticFindingsItems: [
        {
          label: 'Encroachment to the existing/proposed Road Right-of-Way',
          val: 'Encroachment to the existing/proposed Road Right-of-Way',
          key: 'encroachement_key'
        },
        {
          label: 'Existing Drainage Right-of-Way affected by the proposed construction',
          val: 'Existing Drainage Right-of-Way affected by the proposed construction',
          key: 'existing_key'
        },
        {
          label: 'Existing Utilities affected by the proposed Construction',
          val: 'Existing Utilities affected by the proposed Construction',
          key: 'existing_utilities_key'
        },
        {
          label: 'Site is clear for the proposed construction',
          val: 'Site is clear for the proposed construction',
          key: 'site_clear_key'
        }
      ],
      architectItems: [
        {
          label: 'i. Vicinity Map/location Plan within a 2.00 kilometer radius for commercial, industrial, and institutional complex and within a half-kilometer radius for residential buildings, at any convenient scale showing prominent landmarks or major thoroughfares for easy reference.',
          val: 'Vicinity Map/location Plan within a 2.00 kilometer radius for commercial, industrial, and institutional complex and within a half-kilometer radius for residential buildings, at any convenient scale showing prominent landmarks or major thoroughfares for easy reference.',
          key: 'vicinity_map_key'
        },
        {
          label: 'ii. Site Development Plan showing technical description, boundaries, orientation and position of proposed building/structure in relation to the lot, existing or proposed access road and driveways and existing public utilities/services. Existing buildings within and adjoining the lot shall be hatched and distances between the proposed and existing buildings shall be indicated.',
          val: 'Site Development Plan showing technical description, boundaries, orientation and position of proposed building/structure in relation to the lot, existing or proposed access road and driveways and existing public utilities/services. Existing buildings within and adjoining the lot shall be hatched and distances between the proposed and existing buildings shall be indicated.',
          key: 'site_dev_key'
        },
        {
          label: `iii. Perspective drawn at a convenient scale and taken from a vantage point (bird's eye view or eye level).`,
          val: `Perspective drawn at a convenient scale and taken from a vantage point (bird's eye view or eye level).`,
          key: 'perspective_drawn_key'
        },
        {
          label: 'iv. Floor Plans drawn to scale of not less than 1:100 showing: gridlines, complete identification of rooms or functional spaces.',
          val: 'Floor Plans drawn to scale of not less than 1:100 showing: gridlines, complete identification of rooms or functional spaces.',
          key: 'floor_plans_key'
        },
        {
          label: 'v. Elevations, at least four (4), same scale as floor plans showing: gridlines; natural ground to finish grade elevations; floor to floor heights; door and window marks, type of material and exterior finishes; adjoining existing structure/s, if any, shown in single hatched line.',
          val: 'Elevations, at least four (4), same scale as floor plans showing: gridlines; natural ground to finish grade elevations; floor to floor heights; door and window marks, type of material and exterior finishes; adjoining existing structure/s, if any, shown in single hatched line.',
          key: 'elevations_key'
        },
        {
          label: 'vi. Sections, at least two (2), showing: gridlines; natural ground and finish levels; outline of cut and visible structural parts; doors and windows properly labeled reflecting the direction of opening; partitions; built-in cabinets, etc.; identification of rooms and functional spaces cut by section lines.',
          val: 'Sections, at least two (2), showing: gridlines; natural ground and finish levels; outline of cut and visible structural parts; doors and windows properly labeled reflecting the direction of opening; partitions; built-in cabinets, etc.; identification of rooms and functional spaces cut by section lines.',
          key: 'sections_key'
        },
        {
          label: 'vii. Reflected ceiling plan showing: design, location, finishes ana specifications of materials, lighting fixtures, diffusers, decorations, air conditioning exhaust and return grills, sprinkler nozzles, if any, at scale of at least 1:100.',
          val: 'Reflected ceiling plan showing: design, location, finishes ana specifications of materials, lighting fixtures, diffusers, decorations, air conditioning exhaust and return grills, sprinkler nozzles, if any, at scale of at least 1:100.',
          key: 'reflected_key'
        }
      ],
      aeightItems: [
        {
          label: '(a) Accessible ramps',
          val: 'Accessible ramps',
          key: 'accessible_ramps_key'
        },
        {
          label: '(b) Accessible stairs',
          val: 'Accessible stairs',
          key: 'accessible_stairs_key'
        },
        {
          label: '(c) Accessible lifts/elevators',
          val: 'Accessible lifts/elevators',
          key: 'accessible_lifts_key'
        },
        {
          label: '(d) Accessible entrances, corridors and walkways',
          val: 'Accessible entrances, corridors and walkways',
          key: 'accessible_entrances_key'
        },
        {
          label: '(e) Accessible functional areas/comfort rooms',
          val: 'Accessible functional areas/comfort rooms',
          key: 'accessible_areas_key'
        },
        {
          label: '(f) Accessible switches, controls',
          val: 'Accessible switches, controls',
          key: 'accessible_switches_key'
        },
        {
          label: '(g) Accessible drinking fountains',
          val: 'Accessible drinking fountains',
          key: 'accessible_drinking_key'
        },
        {
          label: '(h) Accessible public telephone booths',
          val: 'Accessible public telephone booths',
          key: 'accessible_public_key'
        },
        {
          label: '(i) Accessible audio visual and automatic alarm system',
          val: 'Accessible audio visual and automatic alarm system',
          key: 'accessible_audio_key'
        },
        {
          label: '(j) Accessible access symbols and directional signs',
          val: 'Accessible access symbols and directional signs',
          key: 'accessible_access_key'
        },
        {
          label: '(k) Reserved parking for disabled persons',
          val: 'Reserved parking for disabled persons',
          key: 'accessible_parking_key'
        },
        {
          label: '(l) Typical wall/bay sections from ground to roof',
          val: 'Typical wall/bay sections from ground to roof',
          key: 'accessible_wall_key'
        },
        {
          label: '(m) Stairs, interior and exterior',
          val: 'Stairs, interior and exterior',
          key: 'accessible_interior_key'
        },
        {
          label: '(n) Fire escapes/exits',
          val: '(n) Fire escapes/exits',
          key: 'fire_escapes_key'
        },
        {
          label: '(o) Built-in cabinets, counters and fixed furniture',
          val: 'Built-in cabinets, counters and fixed furniture',
          key: 'cabinets_key'
        },
        {
          label: '(p) All types of partitions',
          val: 'All types of partitions',
          key: 'all_types_key'
        }
      ],
      otherAItems: [{
        label: 'lx. Schedule of Doors and Windows showing their types, designations/marks, climernions, materials, and number of sets.',
        val: 'Schedule of Doors and Windows showing their types, designations/marks, climernions, materials, and number of sets.',
        key: 'schedule_doors_key'
      },
      {
        label: 'x. Schedule of Finishes, showing in graphic form: surface finishes specified for floor.:, ceilings, walls and baseboard trims for all building spaces per floor level.',
        val: 'Schedule of Finishes, showing in graphic form: surface finishes specified for floor.:, ceilings, walls and baseboard trims for all building spaces per floor level.',
        key: 'schedule_finishes_key'
      },
      {
        label: 'xi. Details of other major Architectural Elements.',
        val: 'Details of other major Architectural Elements.',
        key: 'other_major_key'
      }],
      bItems: [{
        label: 'i. Space Plan/s layout/s of architectural interior/s.',
        val: 'Space Plan/s layout/s of architectural interior/s.',
        key: 'space_plans_key'
      },
      {
        label: 'ii. Architectural interior perspective/s.',
        val: 'Architectural interior perspective/s.',
        key: 'architectural_interior_key'
      },
      {
        label: 'iii. Furniture/furnishing/equipment/process layout/s.',
        val: 'Furniture/furnishing/equipment/process layout/s.',
        key: 'furniture_key'
      },
      {
        label: 'iv. Access plan/s, parking plan/s and the like.',
        val: 'Access plan/s, parking plan/s and the like.',
        key: 'access_plans_key'
      },
      {
        label: 'v. Detail design of major architectural interior elements.',
        val: 'Detail design of major architectural interior elements.',
        key: 'major_design_key'
      },
      {
        label: 'vi. Plan and layout of interior, wall partitions, furnishing, furniture, equipment/appliances at a scale of at least 1:100.',
        val: 'Plan and layout of interior, wall partitions, furnishing, furniture, equipment/appliances at a scale of at least 1:100.',
        key: 'plan_layout_key'
      },
      {
        label: 'vii. Interior wall elevations showing: finishes, switches, doors and convenience outlets, cross window sections with interior perspective as viewed from the main entrance at scale of at least 1:100.',
        val: 'Interior wall elevations showing: finishes, switches, doors and convenience outlets, cross window sections with interior perspective as viewed from the main entrance at scale of at least 1:100.',
        key: 'interior_wall_key'
      },
      {
        label: 'viii. Floor/ceiling/wall patterns and finishing details.',
        val: 'Floor/ceiling/wall patterns and finishing details.',
        key: 'floor_ceiling_key'
      },
      {
        label: 'ix. List of materials used.',
        val: 'List of materials used.',
        key: 'materials_used_key'
      },
      {
        label: 'x. Cost Estimates',
        val: 'Cost Estimates',
        key: 'cost_extimates_key'
      },
      {
        label: 'c. Plans and specific-locations of all accessibility facilities of scale of at least 1:100.',
        val: 'Plans and specific-locations of all accessibility facilities of scale of at least 1:100.',
        key: 'plans_specific_key'
      }],
      eItems: [{
        label: 'Layout plan of each floor indicating the Are evacuation route to safe dispersal areas, standpipes with fire hose, fire extinguishers, first aid kits/cabinets, fire alarm, fire operations room, emergency, lights, signs, etc.',
        val: 'Layout plan of each floor indicating the Are evacuation route to safe dispersal areas, standpipes with fire hose, fire extinguishers, first aid kits/cabinets, fire alarm, fire operations room, emergency, lights, signs, etc.',
        key: 'layout_plan_key'
      },
      {
        label: 'Details of windows, fire exits with grilled windows and ladders.',
        val: 'Details of windows, fire exits with grilled windows and ladders.',
        key: 'details_window_key'
      },
      {
        label: 'Details of fire-resistive construction of enclosures for vertical penings.',
        val: 'Details of fire-resistive construction of enclosures for vertical penings."',
        key: 'details_fire_resist_key'
      },
      {
        label: 'Details of fire-resistive construction materials and interior decorattve materials with fire-resistive/fire-retardant/fire-spread ratings',
        val: 'Details of fire-resistive construction materials and interior decorattve materials with fire-resistive/fire-retardant/fire-spread ratings',
        key: 'details_fire_materials_key'
      },
      {
        label: 'f. Other related documents',
        val: 'Other related documents"',
        key: 'other_related_key'
      }],
      architecturalItems: [{
        label: 'Erase Architectural law',
        val: 'Erase Architectural law"',
        key: 'erase_architect_key'
      },
      {
        label: 'Label materials & finishes in the elevation',
        val: 'Label materials & finishes in the elevation"',
        key: 'label_materials_key'
      },
      {
        label: 'Observe proper setback',
        val: 'Observe proper setback',
        key: 'observe_proper_key'
      },
      {
        label: 'Outermost limits of building projection shal be 173 ofthe preschibed setback',
        val: 'Outermost limits of building projection shal be 173 ofthe preschibed setback',
        key: 'outermost_limits_key'
      },
      {
        label: 'Provide 1.10m clear minimum width of the hallway',
        val: 'Provide 1.10m clear minimum width of the hallway',
        key: 'provide__clear_key'
      },
      {
        label: 'Provide 1.50m minimum walkway with the same elevation with the commercial space',
        val: 'Provide 1.50m minimum walkway with the same elevation with the commercial space',
        key: 'provide_minimum_key'
      },
      {
        label: 'Provide 2.70m clear celling height',
        val: 'Provide 2.70m clear celling height',
        key: 'provide_ceiling_key'
      },
      {
        label: 'Provide 200mm thick Firewall & extend 0.40m from top of roofing sheet & 0.60m from the gutter on the side',
        val: 'Provide 200mm thick Firewall & extend 0.40m from top of roofing sheet & 0.60m from the gutter on the side',
        key: 'provide_thick_key'
      },
      {
        label: `Provide ramp with handrail on both sides at 0.70m & O.90m in height with 1.20m minimum
             clear width & 1:12 maximum gradient{refer to 8344 accessibility (law)`,
        val:  `Provide ramp with handrail on both sides at 0.70m & O.90m in height with 1.20m minimum
             clear width & 1:12 maximum gradient{refer to 8344 accessibility (law)`,
        key: 'provide_ramp_key'
      },
      {
        label: `Provide toilet & washroom for PWD with 1.70m x 1.80m minimun clear width with grab bar at
            0-80m in height & 0.90m in length with 0.90m door width opening outward submit plan &
            etall(refer to BP344 acessibility law)`,
        val:  `Provide toilet & washroom for PWD with 1.70m x 1.80m minimun clear width with grab bar at
            0-80m in height & 0.90m in length with 0.90m door width opening outward submit plan &
            etall(refer to BP344 acessibility law)`,
        key: 'provide_toilet_key'
      },
      {
        label: `Reflect parking slots provided in the site development plan`,
        val:  `Reflect parking slots provided in the site development plan`,
        key: 'reflect_parking_key'
      },
      {
        label: `Provide TOSL ( Total open space within Lot )`,
        val:  `Provide TOSL ( Total open space within Lot )`,
        key: 'provide_tosl_key'
      },
      {
        label: `Roof eaves shall be 0.75m away from the property line`,
        val:  `Roof eaves shall be 0.75m away from the property line`,
        key: 'roof_eaves_key'
      },
      {
        label: `Rooms shall have a minimum area of 6m2 with a minimum width oF 2m`,
        val:  `Rooms shall have a minimum area of 6m2 with a minimum width oF 2m`,
        key: 'rooms_shall_key'
      },
      {
        label: `Stairs 0.20m rise, 0.25m run`,
        val:  `Stairs 0.20m rise, 0.25m run`,
        key: 'stairs_key'
      },
      {
        label: `Submit 2 sections as per section 302.4.a.vi`,
        val:  `Submit 2 sections as per section 302.4.a.vi`,
        key: 'submit_sections_key'
      },
      {
        label: `Submit 4 elevations as per section 302.4.a.v( label materials & finishes used`,
        val:  `Submit 4 elevations as per section 302.4.a.v( label materials & finishes used`,
        key: 'submit_elevations_key'
      },
      {
        label: `Submit approved building permit, occupancy permit & building plans of the existing building`,
        val:  `Submit approved building permit, occupancy permit & building plans of the existing building`,
        key: 'submit_approved_key'
      },
      {
        label: `Submit bill of materials & project specification as per building pian submitted`,
        val:  `Submit bill of materials & project specification as per building pian submitted`,
        key: 'submit_bill_key'
      },
      {
        label: `Submit floor plans as per section 302.4.a.iv`,
        val:  `Submit floor plans as per section 302.4.a.iv`,
        key: 'submit_floor_key'
      },
      {
        label: `Submit interior elevation as per section 302.4.b.vi`,
        val:  `Submit interior elevation as per section 302.4.b.vi`,
        key: 'submit_interior_elevation_key'
      },
      {
        label: `Submit interior wall elevations as per section 302.4 VII`,
        val:  `Submit interior wall elevations as per section 302.4 VII`,
        key: 'submit_interior_wall_key'
      },
      {
        label: `Submit project specification as per building plans submitted`,
        val:  `Submit project specification as per building plans submitted`,
        key: 'submit_project_key'
      },
      {
        label: `Submit reflected ceiling pian as per section 302.4.a.vii`,
        val:  `Submit reflected ceiling pian as per section 302.4.a.vii`,
        key: 'submit_reflected_key'
      },
      {
        label: `Submit schedule of doors and windows as per sec. 302,4.a.xi`,
        val:  `Submit schedule of doors and windows as per sec. 302,4.a.xi`,
        key: 'submit_schedule_key'
      },
      {
        label: `Submit site development plan as per section 302.4. (refies Technical description of the lot & it's distances, setbacks & width of the coad right of way)`,
        val:  `Submit site development plan as per section 302.4. (refies Technical description of the lot & it's distances, setbacks & width of the coad right of way)`,
        key: 'submit_site_key'
      },
      {
        label: `Submit stair plan & elevation reflecting rise 0.20m max & run 0.25 min`,
        val:  `Submit stair plan & elevation reflecting rise 0.20m max & run 0.25 min`,
        key: 'submit_stair_plan_key'
      },
      {
        label: `Use Panic Door for the fire exit`,
        val:  `Use Panic Door for the fire exit`,
        key: 'use_panic_key'
      },
      {
        label: `Verify usage on floor plan`,
        val:  `Verify usage on floor plan`,
        key: 'verify_usage_key'
      },
      {
        label: `Provide fire exit stairway type fixed on the ground with 0.20m max rise & 0.25m min run`,
        val:  `Provide fire exit stairway type fixed on the ground with 0.20m max rise & 0.25m min run`,
        key: 'provide_fire_key'
      },
      {
        label: `Stair landing shall have the same width with that of the stair width`,
        val:  `Stair landing shall have the same width with that of the stair width`,
        key: 'stair_landing_key'
      },
      {
        label: `Minimum width of the fire exit hall be 0.60m`,
        val:  `Minimum width of the fire exit hall be 0.60m`,
        key: 'minimum_width_key'
      }],
      civilItems: [{
        label: `i. Foundation Plans and Details at scale of not less than 1:100.`,
        val:  `Foundation Plans and Details at scale of not less than 1:100.`,
        key: 'foundation_plan_key'
      },
      {
        label: `ii. Floor/Roof Framing Plans and Details at scale of not less than 1:100.`,
        val:  `Floor/Roof Framing Plans and Details at scale of not less than 1:100.`,
        key: 'floor_roof_key'
      },
      {
        label: `iii. Details and Schedules of structural and civil works elements including those for deep wells, water reservoir, pipe lines and sewer system.`,
        val:  `Details and Schedules of structural and civil works elements including those for deep wells, water reservoir, pipe lines and sewer system.`,
        key: 'details_sched_key'
      }],
      otherCivilItems: [{
        label: `Site Development Plan: showing technical description, boundaries, orientation and position of proposed non-architectural horizontal structure such as: sewerage treatment plan (STP), silos, elevated tanks, towers, fences, etc. building/structure in relation to the lot, existing or proposed access road and driveways and existing public utilities/services. Existing buildings within and adjoining the lot shall be hatched and distances between the proposed and existing buildings shall be indicated.`,
        val:  `Site Development Plan: showing technical description, boundaries, orientation and position of proposed non-architectural horizontal structure such as: sewerage treatment plan (STP), silos, elevated tanks, towers, fences, etc. building/structure in relation to the lot, existing or proposed access road and driveways and existing public utilities/services. Existing buildings within and adjoining the lot shall be hatched and distances between the proposed and existing buildings shall be indicated.`,
        key: 'site_dev_key'
      },
      {
        label: `Structural Analysis and Design for all buildings/structures except for one storey and single detached building/structure with a total floor area of 20.00 sq. meters or less`,
        val:  `Structural Analysis and Design for all buildings/structures except for one storey and single detached building/structure with a total floor area of 20.00 sq. meters or less`,
        key: 'structural_key'
      },
      {
        label: `Boring and Load: Buildings or structures of three (3) storeys and higher, boring tests and, if necessary, load tests shall be required in accordance with the applicable latest approved provisions of the National Structural Code of the Philippines (NSCP). However, adequate soil exploration (including boring and load tests) shall also be required for lower buildings/structures at areas with potential geological/geotechnical hazards. The written report of the civil/geotechnica I engineer including but not limited to the design bearing capacity as well as the result of tests shall be submitted together with the other requirements in the application for a building permit. Boring test or load test shall also be done according to the applicable provisions of the NSCP which set forth requirements governing excavation, grading and earthwork construction, including fills and embankments for any building/structure and for foundation and retaining structures.`,
        val:  `Boring and Load: Buildings or structures of three (3) storeys and higher, boring tests and, if necessary, load tests shall be required in accordance with the applicable latest approved provisions of the National Structural Code of the Philippines (NSCP). However, adequate soil exploration (including boring and load tests) shall also be required for lower buildings/structures at areas with potential geological/geotechnical hazards. The written report of the civil/geotechnica I engineer including but not limited to the design bearing capacity as well as the result of tests shall be submitted together with the other requirements in the application for a building permit. Boring test or load test shall also be done according to the applicable provisions of the NSCP which set forth requirements governing excavation, grading and earthwork construction, including fills and embankments for any building/structure and for foundation and retaining structures.`,
        key: 'boring_load_key'
      },
      {
        label: `Seismic Analysis`,
        val:  `Seismic Analysis`,
        key: 'seismic_key'
      },
      {
        label: `Other related documents`,
        val:  `Other related documents`,
        key: 'other_related_docs_key'
      }],
      electricalItems: [{
        label: `a. Location and Site Plans`,
        val:  `Location and Site Plans`,
        key: 'location_site_key'
      },
      {
        label: `b. Legend or Symbols`,
        val:  `Legend or Symbols`,
        key: 'legend_key'
      },
      {
        label: `c. General Notes and/or Specifications`,
        val:  `General Notes and/or Specifications`,
        key: 'general_notes_key'
      },
      {
        label: `d. Electrical Layout`,
        val:  `Electrical Layout`,
        key: 'electrical_key'
      },
      {
        label: `e. Schedule of Loads, Transformers, Generating/UPS tint (Total kVA for each of the preceding Items shall be indicated in the schedule)`,
        val:  `Schedule of Loads, Transformers, Generating/UPS tint (Total kVA for each of the preceding Items shall be indicated in the schedule)`,
        key: 'schedule_loads_key'
      },
      {
        label: `f. Design Analysis`,
        val:  `Design Analysis`,
        key: 'design_analysis_key'
      },
      {
        label: `g. One Line Diagram`,
        val:  `One Line Diagram`,
        key: 'onle_line_key'
      }],
      electronicsItems: [{
        label: `a. General layout plans with legends`,
        val:  `General layout plans with legends`,
        key: 'general_layout_key'
      },
      {
        label: `b. Single line diagram`,
        val:  `Single line diagram`,
        key: 'single_line_key'
      },
      {
        label: `c. Riser diagram`,
        val:  `Riser diagram`,
        key: 'riser_diagram_key'
      },
      {
        label: `d. Isometry of the system`,
        val:  `Isometry of the system`,
        key: 'isometry_key'
      },
      {
        label: `e. Equipment specifications`,
        val:  `Equipment specifications`,
        key: 'equipment_key'
      },
      {
        label: `f. Design analysis. as applicable`,
        val:  `Design analysis. as applicable`,
        key: 'design_analysis_key'
      },
      {
        label: `g. Cost estimates`,
        val:  `Cost estimates`,
        key: 'cost_estimates_key'
      }],
      sanitaryItems: [{
        label: `i. Location Plan and Site Plan`,
        val:  `Location Plan and Site Plan`,
        key: 'location_plan_key'
      },
      {
        label: `ii. Detailed Plan and layout drawings of minimum scale 1:100`,
        val:  `Detailed Plan and layout drawings of minimum scale 1:100`,
        key: 'detailed_plan_key'
      },
      {
        label: `iii. Design analysis and technical specifications`,
        val:  `iii. Design analysis and technical specifications`,
        key: 'design_analysis_tech_key'
      },
      {
        label: `iv. Cost Estimates`,
        val:  `iv. Cost Estimates`,
        key: 'cost_estimates_key'
      }],
      sanitaryBItems: [{
        label: `i. Detailed plan, layout and drawing of abatement and control device of minimum scale 1:100`,
        val:  `Detailed plan, layout and drawing of abatement and control device of minimum scale 1:100`,
        key: 'detailed_plan_layout_key'
      },
      {
        label: `ii. Design analysis and technical specifications`,
        val:  `ii. Design analysis and technical specifications`,
        key: 'detailed_an_tech_key'
      },
      {
        label: `iii. Cost Estimates`,
        val:  `iii. Cost Estimates`,
        key: 'cost_estimates_key'
      }],
      plumbingItems: [{
        label: `Location Plan and Site Plan of minimum scale 1:2000`,
        val:  `Location Plan and Site Plan of minimum scale 1:2000`,
        key: 'loc_plan_site_key'
      },
      {
        label: `b. Plumbing Plans, Layouts and Details, of minimum scale 1:50`,
        val:  `Plumbing Plans, Layouts and Details, of minimum scale 1:50`,
        key: 'plumbing_plans_key'
      },
      {
        label: `c. Legend and General Notes`,
        val:  `Legend and General Notes`,
        key: 'legend__gen_key'
      },
      {
        label: `d. Isometric drawings of the systems`,
        val:  `d. Isometric drawings of the systems`,
        key: 'iso_drawings_key'
      },
      {
        label: `e. Design analysis and technical specifications`,
        val:  `e. Design analysis and technical specifications`,
        key: 'design_ana_specs_key'
      },
      {
        label: `f. Cost Estimates`,
        val:  `f. Cost Estimates`,
        key: 'f_cost_est_key'
      }],
      meansItems: [{
        label: `1. Building exits must about a public street or approved alley.`,
        val:  `Building exits must about a public street or approved alley.`,
        key: 'building_exists'
      },
      {
        label: `2. Provide at least two (2) means of egress for each floor, room.`,
        val:  `Provide at least two (2) means of egress for each floor, room.`,
        key: 'provide_at_least'
      },
      {
        label: `3. Provide secondary stairs/exits as far/remote from main stair, to serve _______________.`,
        val:  `Provide secondary stairs/exits as far/remote from main stair, to serve _______________.`,
        key: 'provide_secondary'
      },
      {
        label: `4. Enclose all stairways and ire escapes with walls having hours of fire resistance with access thru self-closing fire doors.`,
        val:  `Enclose all stairways and ire escapes with walls having hours of fire resistance with access thru self-closing fire doors.`,
        key: 'enclose_all_staiwways'
      },
      {
        label: `5. Provide two (2) doors as exit ways from all rooms.`,
        val:  `Provide two (2) doors as exit ways from all rooms.`,
        key: 'enclose_two'
      },
      {
        label: `6. Interconnect stairs and fire escapes with fire resistive passageways on corridors at least meters wide.`,
        val:  `Interconnect stairs and fire escapes with fire resistive passageways on corridors at least meters wide.`,
        key: 'interconnect_stairs '
      },
      {
        label: `7. Enclose walls, doors, stairs ramps, escalators and other components of`,
        val:  `Enclose walls, doors, stairs ramps, escalators and other components of.`,
        key: 'enclose_walls'
      },
      {
        label: `8. Provide protected/enclosed horizontal exits with self-closing fire doors.`,
        val:  `Provide protected/enclosed horizontal exits with self-closing fire doors.`,
        key: 'provide_protected'
      },
      {
        label: `9. Travel distance to an exit shall not be more than _________________ meters.`,
        val:  `Travel distance to an exit shall not be more than _________________ meters.`,
        key: 'travel_distance'
      },
      {
        label: `10. Exit doors shall swing in the direction of exit travel.`,
        val:  `Exit doors shall swing in the direction of exit travel.`,
        key: 'exit_doors'
      },
      {
        label: `11. Revolving doors shall not be used as means of egress except _________________.`,
        val:  `Revolving doors shall not be used as means of egress except _________________.`,
        key: 'revolving_doors'
      },
      {
        label: `12. Exit door/s should be openable from the inside without the use of keys, special knowledge or effort flush bolts or surface bolts are prohibited.`,
        val:  `Exit door/s should be openable from the inside without the use of keys, special knowledge or effort flush bolts or surface bolts are prohibited.`,
        key: 'revolving_doors'
      },
      {
        label: `13. Exit door should have a minimum width of 71 cm and a maximum width 122 cm and shall not restrict the opening.`,
        val:  `Exit door should have a minimum width of 71 cm and a maximum width 122 cm and shall not restrict the opening.`,
        key: 'exit_door_should'
      },
      {
        label: `14. A floor or landing is required not less than the width of exit door.`,
        val:  `A floor or landing is required not less than the width of exit door.`,
        key: 'a_floor_or'
      },
      {
        label: `15. Door should be not project into the required corridor width when fully opened so as not to reduce the corridor width to less than 76.17 cm.`,
        val:  `Door should be not project into the required corridor width when fully opened so as not to reduce the corridor width to less than 76.17 cm.`,
        key: 'dooor_should'
      },
      {
        label: `16. Exit doors should provide immediate access to an approved means of egress. Exiting through a bathroom, bedroom or other room subject to locking does not comply.`,
        val:  `Exit doors should provide immediate access to an approved means of egress. Exiting through a bathroom, bedroom or other room subject to locking does not comply.`,
        key: 'exit_doors_should_provide'
      },
      {
        label: `17. Corridors should have a minimum width of _________ meters.`,
        val:  `Corridors should have a minimum width of _________ meters.`,
        key: 'corridors_should'
      },
      {
        label: `18. Required corridors in_________ occupancies shall have 2.43 meters (8 ft) minimum width.`,
        val:  `Required corridors in_________ occupancies shall have 2.43 meters (8 ft) minimum width.`,
        key: 'required_corridors'
      },
      {
        label: `19. Dead-end corridors and exit balconies is limited to 6.08 m (20 ft).`,
        val:  `Dead-end corridors and exit balconies is limited to 6.08 m (20 ft).`,
        key: 'dead_end_corridors'
      },
      {
        label: `20. Aisles in auditorium shall be minimum of _____ meters in width.`,
        val:  ` Aisles in auditorium shall be minimum of _____ meters in width.`,
        key: 'aisles'
      },
      {
        label: `21. Walls and ceilings of corridors should be fire resistive construction materials.`,
        val:  ` Walls and ceilings of corridors should be fire resistive construction materials.`,
        key: 'walls_ceilings'
      },
      {
        label: `22. Interior openings into corridor should be protected as set forth in _________________.`,
        val:  ` Interior openings into corridor should be protected as set forth in _________________.`,
        key: 'interior_openings'
      },
      {
        label: `23. Main stairways should have a minimum width of 112 cm. Trims and handrails should not project more than 8.90 cm (3 1/2 in) into the required width.`,
        val:  `Main stairways should have a minimum width of 112 cm. Trims and handrails should not project more than 8.90 cm (3 1/2 in) into the required width.`,
        key: 'main_stairways'
      },
      {
        label: `24. Landings on stairways should have a minimum dimension of 112 cm (44 in) in the direction of travel.`,
        val:  `Landings on stairways should have a minimum dimension of 112 cm (44 in) in the direction of travel.`,
        key: 'landings_on_stairways'
      },
      {
        label: `25. Risers on stairways should not exceed 19 cm and tread exclusive of nosing or projections should not be less than 25 cm.`,
        val:  `Risers on stairways should not exceed 19 cm and tread exclusive of nosing or projections should not be less than 25 cm.`,
        key: 'risers_on_railways'
      },
      {
        label: `26. Doors between guest’s rooms and corridors shall be self-closing and shall have a fire protection rating at least twenty (20) minutes.`,
        val:  `Doors between guest’s rooms and corridors shall be self-closing and shall have a fire protection rating at least twenty (20) minutes.`,
        key: 'doors_between_guests'
      },
      {
        label: `27. Openings in cor ri d or partitions other than door openings shall be prohibited.`,
        val:  `Openings in cor ri d or partitions other than door openings shall be prohibited.`,
        key: 'openings_in_cor'
      },
      {
        label: `28. Basement portion of stairways should be provided with an approved barrier where continuous to upper floor in an exit enclosure.`,
        val:  `Basement portion of stairways should be provided with an approved barrier where continuous to upper floor in an exit enclosure.`,
        key: 'basement_portion'
      },
      {
        label: `29. Vertical distance between stairway landings are limited to 3.69 m (12 ft) in assembly occupancies, distance is 2.43 m (8 ft)`,
        val:  `Vertical distance between stairway landings are limited to 3.69 m (12 ft) in assembly occupancies, distance is 2.43 m (8 ft)`,
        key: 'vertical_distance'
      },
      {
        label: `30. Handrails should be placed not less than 81.28 cm (32 in) above the tread. Two (2) handrails are required when stairways exceed 111.7 cm in width.`,
        val:  `Handrails should be placed not less than 81.28 cm (32 in) above the tread. Two (2) handrails are required when stairways exceed 111.7 cm in width.`,
        key: 'handrails'
      },
      {
        label: `31. Guardrails for stairs, balconies, stair landings, ramps & aisles located along the edge of openside floors and mezzanines shall be provided.`,
        val:  `Guardrails for stairs, balconies, stair landings, ramps & aisles located along the edge of openside floors and mezzanines shall be provided.`,
        key: 'guardrails'
      },
      {
        label: `32. There shall be no enclosed usable space under the stairs in an exit enclosure nor shall the open space under such stairs be used for any purpose.`,
        val:  `There shall be no enclosed usable space under the stairs in an exit enclosure nor shall the open space under such stairs be used for any purpose.`,
        key: 'there_shall_be'
      },
      {
        label: `33. Non-combustible outside stairs are required to have 2.03 m (6 ft, 8 in) minimum headroom clearance for stairways which should be indicated on plans.`,
        val:  `Non-combustible outside stairs are required to have 2.03 m (6 ft, 8 in) minimum headroom clearance for stairways which should be indicated on plans.`,
        key: 'non_combustible'
      },
      {
        label: `34. Ramp slopes should have be roughened or with nonslip surface.`,
        val:  `Ramp slopes should have be roughened or with nonslip surface.`,
        key: 'ramp_slopes'
      },
      {
        label: `35. Ramp slopes should not exceed 30.3 cm. (1 ft) in 3.03 m (10 ft.).`,
        val:  `Ramp slopes should not exceed 30.3 cm. (1 ft) in 3.03 m (10 ft.).`,
        key: 'ramp_slopes_not'
      },
      {
        label: `36. No openings other than the required exits are permitted and exit passageways should be one (1) hr fire resistive construction for a three (3) storey building or less and two (2) hrs for four (4) storey building or more. Any opening therein shall be protected with an approved self-closing fire doors.`,
        val:  `No openings other than the required exits are permitted and exit passageways should be one (1) hr fire resistive construction for a three (3) storey building or less and two (2) hrs for four (4) storey building or more. Any opening therein shall be protected with an approved self-closing fire doors.`,
        key: 'no_openings'
      },
      {
        label: `37. Exit illumination and directional EXIT signs shall be provided.`,
        val:  `Exit illumination and directional EXIT signs shall be provided.`,
        key: 'exit_illumination'
      },
      {
        label: `38. Panic hardware is required on exit doors. In lieu of this, doors shall have no locks or latches.`,
        val:  `Panic hardware is required on exit doors. In lieu of this, doors shall have no locks or latches.`,
        key: 'panic_hardware'
      }],
      compartmentItems: [{
        label: `39. Provide fire break up to the roof for ceiling areas.`,
        val:  `Provide fire break up to the roof for ceiling areas.`,
        key: 'provide_fire_break'
      },
      {
        label: `40. Provide monitored and curtained roof of sheet metal or non-combustible material of a minimum of 1.82m (6 ft) high spaced not more than 76 m (250 ft) & curtained area 2 2limited to a minimum of 4, 630 m2 (50,000 ft ).`,
        val:  `Provide monitored and curtained roof of sheet metal or non-combustible material of a minimum of 1.82m (6 ft) high spaced not more than 76 m (250 ft) & curtained area 2 2limited to a minimum of 4, 630 m2 (50,000 ft2).`,
        key: 'provide_monitoring'
      },
      {
        label: `41. Provide smoke partition at enclosed areas of 2, 083 m2 (22, 500 ft2) or less with the length of 45.7m (150 ft) or less, with self-closing fire doors.`,
        val:  `Provide smoke partition at enclosed areas of 2, 083 m2 (22, 500 ft2) or less with the length of 45.7m (150 ft) or less, with self-closing fire doors.`,
        key: 'provide_smoke'
      },
      {
        label: `42. Provide smoke partition of two (2) hour fire resistance from floor to underside of floor above.`,
        val:  `Provide smoke partition of two (2) hour fire resistance from floor to underside of floor above.`,
        key: 'provide_smoke_two'
      },
      {
        label: `43. Provide interior  as follows; Exit; Class Access to Exit; Class ___________ Other Spaces; Class___________`,
        val:  `Provide interior finish as follows; Exit; Class Access to Exit; Class ___________ Other Spaces; Class___________`,
        key: 'provide_interior_finish'
      },
      {
        label: `44. Provide fire stopping for all concealed spaces.`,
        val:  `Provide fire stopping for all concealed spaces.`,
        key: 'provide_fire_stopping'
      }],
      wallItems: [{
        label: `45. Provide standard fire wall with at least 100 cm (39.38 in) high parapets on all portion of the building on the property line.`,
        val:  `Provide standard fire wall with at least 100 cm (39.38 in) high parapets on all portion of the building on the property line.`,
        key: 'provide_standard_fire'
      },
      {
        label: `46. Extend exterior masonry walls to form parapets or wings.`,
        val:  `Extend exterior masonry walls to form parapets or wings.`,
        key: 'extend_exterior_masonry'
      },
      {
        label: `47. Provide protection of all exterior walls. All exterior walls facing approved alleys which are dead-ended must have a fire resistance of hours.`,
        val:  `Provide protection of all exterior walls. All exterior walls facing approved alleys which are dead-ended must have a fire resistance of hours.`,
        key: 'provide_protection'
      },
      {
        label: `48. Provide automatic fire dampers on wall openings.`,
        val:  `Provide automatic fire dampers on wall openings.`,
        key: 'provide_automatic'
      }],
      warningsystemsItems: [{
        label: `49. Provide approved emergency alarm bell system on each floor with adequate number of sending stations.`,
        val:  `Provide approved emergency alarm bell system on each floor with adequate number of sending stations.`,
        key: 'provide_approved'
      },
      {
        label: `50. Provide approved type heat and smoke detection system.`,
        val:  `Provide approved type heat and smoke detection system.`,
        key: 'provide_approved_type'
      },
      {
        label: `51. Provide efficient communication system for warning occupants and calling fire department.`,
        val:  `Provide efficient communication system for warning occupants and calling fire department.`,
        key: 'provide_efficient'
      }],
      fireprotectItems: [{
        label: `52. Provide approved type portable fire extinguisher ABC type, ___lbs. capacity for every 278 m2. (3000 ft2) of floor area or 22.8 m (75 ft) travel distance on every floor level.`,
        val:  `Provide approved type portable fire extinguisher ABC type, ___lbs. capacity for every 278 m2. (3000 ft2) of floor area or 22.8 m (75 ft) travel distance on every floor level.`,
        key: 'approved_type_portable'
      },
      {
        label: `53. Provide dry & wet standpipe system with mm Ф riser and coupling of fire department standards with pumps of reliable pressure & connected to an adequate water supply tank. Hose and hose cabinet shall be provided at every hose gate valve on all floors.`,
        val:  `Provide dry & wet standpipe system with mm Ф riser and coupling of fire department standards with pumps of reliable pressure & connected to an adequate water supply tank. Hose and hose cabinet shall be provided at every hose gate valve on all floors.`,
        key: 'dry_wet'
      },
      {
        label: `54. Provide Fire Service connection with a standard outlet of 64 mm Ф, and 102 mm Ф dry standpipe, and shall located on a street front.`,
        val:  `Provide Fire Service connection with a standard outlet of 64 mm Ф, and 102 mm Ф dry standpipe, and shall located on a street front.`,
        key: 'fire_service_connection'
      },
      {
        label: `55. Provide automatic fire extinguishing system where kitchen equipment is located (Kitchenhood).`,
        val:  `Provide automatic fire extinguishing system where kitchen equipment is located (Kitchenhood).`,
        key: 'automatic_fire_extinguishing'
      },
      {
        label: `56. Provide automatic chemical extinguishing system on all areas where electronic/electrical equipment are located.`,
        val:  `Provide automatic chemical extinguishing system on all areas where electronic/electrical equipment are located.`,
        key: 'provide_automatic_chemical'
      },
      {
        label: `57. Provide approved-type automatic fire extinguishing system in accordance with NFPA 13. Approval of system plan is required prior to installation`,
        val:  `Provide approved-type automatic fire extinguishing system in accordance with NFPA 13. Approval of system plan is required prior to installation`,
        key: 'approved_type_automatic'
      }],
      miscItems: [{
        label: `58. Provide outside window opening on bedrooms with a clear opening of not less than fifty six (56) cm in least dimension and forty five- 2hundredths (0.45) m in area. The bottom of the window shall be not more than one hundred twenty two (122) cm above the floor.`,
        val:  `Provide outside window opening on bedrooms with a clear opening of not less than fifty six (56) cm in least dimension and forty five- 2hundredths (0.45) m in area. The bottom of the window shall be not more than one hundred twenty two (122) cm above the floor.`,
        key: 'outside_window_opening'
      },
      {
        label: `59. All liquefied petroleum gas equipment including such equipment installed at utility gas plants shall be installed in accordance with the provisions of NFPA 59.`,
        val:  `All liquefied petroleum gas equipment including such equipment installed at utility gas plants shall be installed in accordance with the provisions of NFPA 59.`,
        key: 'all_liquefied'
      },
      {
        label: `60. No grills or any obstruction shall be installed on window openings and/or fire exits.`,
        val:  `No grills or any obstruction shall be installed on window openings and/or fire exits.`,
        key: 'no_grills'
      },
      {
        label: `61. Provide emergency lighting facilities with automatic transfer switch to AC/DC power source.`,
        val:  `Provide emergency lighting facilities with automatic transfer switch to AC/DC power source.`,
        key: 'emergency_lighting'
      },
      {
        label: `62. Air conditioning ducts must be provided with approved fire dampers.`,
        val:  `Air conditioning ducts must be provided with approved fire dampers.`,
        key: 'air_conditioning'
      },
      {
        label: `63. Roof covering must be of non-combustible materials. Combustible roof covering must have fire retardant treatment.`,
        val:  `Roof covering must be of non-combustible materials. Combustible roof covering must have fire retardant treatment.`,
        key: 'Roof_covering'
      },
      {
        label: `64. Provide fire escape ladder/s.`,
        val:  `Provide fire escape ladder/s.`,
        key: 'fire_escape_ladder'
      },
      {
        label: `65. Provide fire escape stair/s.`,
        val:  `Provide fire escape stair/s.`,
        key: 'fire_escape_stair'
      },
      {
        label: `66. All unit partition wall shall be extended up to upper floor slab and/or one (1) meter above the roofline.`,
        val:  `All unit partition wall shall be extended up to upper floor slab and/or one (1) meter above the roofline.`,
        key: 'all_unit_partition'
      },
      {
        label: `67. Provide effective means of smoke ventilation such as access panels, movable windows.`,
        val:  `Provide effective means of smoke ventilation such as access panels, movable windows.`,
        key: 'effective_means'
      },
      {
        label: `68. Project activity shall not affect the effectivity of the existing fire protection facilities.`,
        val:  `Project activity shall not affect the effectivity of the existing fire protection facilities.`,
        key: 'activity_shall'
      },
      {
        label: `69. Provide/post allowable occupant load sign/s. Such signs shall be conspicuously and suitably located.`,
        val:  `Provide/post allowable occupant load sign/s. Such signs shall be conspicuously and suitably located.`,
        key: 'post_allowable'
      },
      {
        label: `70. Provide fire protection/suppression during construction.`,
        val:  `Provide fire protection/suppression during construction.`,
        key: 'suppression_during'
      },
      {
        label: `71. Provide fire exit plan for each floor of the building showing the routes from each room to appropriate exits, displayed prominently on the door of each room.`,
        val:  `Provide fire exit plan for each floor of the building showing the routes from each room to appropriate exits, displayed prominently on the door of each room.`,
        key: 'fire_exit_plan'
      },
      {
        label: `72. No heating or lighting apparatus or equipment capable of igniting flammable materials shall be used in any storage or work area where rags, excelsior, hair or other highly flammable or combustible materials are stored or used.`,
        val:  `No heating or lighting apparatus or equipment capable of igniting flammable materials shall be used in any storage or work area where rags, excelsior, hair or other highly flammable or combustible materials are stored or used.`,
        key: 'heating_or'
      },
      {
        label: `73. Provide/post "NO SMOKING" sign/s where combustible materials are stored or handled. Such signs shall be conspicuously and suitable located.`,
        val:  `Provide/post "NO SMOKING" sign/s where combustible materials are stored or handled. Such signs shall be conspicuously and suitable located.`,
        key: 'no_smoking'
      },
      {
        label: `74. If high hazard commodities will be stored/handled, automatic fire suppression system shall be provided`,
        val:  `If high hazard commodities will be stored/handled, automatic fire suppression system shall be provided`,
        key: 'high_hazard'
      },
      {
        label: `75. Provide/post "DO NOT USE ELEVATOR IN CASE OF FIRE" sign/s.`,
        val:  `Provide/post "DO NOT USE ELEVATOR IN CASE OF FIRE" sign/s.`,
        key: 'do_not_use'
      },
      {
        label: `76. LPG tank/s must be installed outside the building and should be provide with safety devices that automatically stop the flow of gas should a leak develop`,
        val:  `LPG tank/s must be installed outside the building and should be provide with safety devices that automatically stop the flow of gas should a leak develop`,
        key: 'lpg_tank'
      },
      {
        label: `77. Provide fire resistive walls between stair & kitchen area.`,
        val:  `Provide fire resistive walls between stair & kitchen area.`,
        key: 'fire_resistive'
      },
      {
        label: `78. Provide outside window/s for rescue and ventilation with a minimum clear opening 2of 55 cm and approximately one half (0.5) m in area; the bottom of window opening is not more than eighty two (82) cm above the floor; it can readily be opened from the inside without the use of tools; where storm windows, screens, or antiburglar devices are used, these be provided with quick mechanism so that they may be so arranged that when opened they will not drop to the ground.`,
        val:  `Provide outside window/s for rescue and ventilation with a minimum clear opening 2of 55 cm and approximately one half (0.5) m in area; the bottom of window opening is not more than eighty two (82) cm above the floor; it can readily be opened from the inside without the use of tools; where storm windows, screens, or antiburglar devices are used, these be provided with quick mechanism so that they may be so arranged that when opened they will not drop to the ground.`,
        key: 'outside_window'
      },
      {
        label: `79. Rooms used for kindergarten, first or second grade pupils shall not be located above or below the floor of exit discharge. Rooms used for second grade pupils shall not be located more than one (1) storey above the floor of exit discharge.`,
        val:  `Rooms used for kindergarten, first or second grade pupils shall not be located above or below the floor of exit discharge. Rooms used for second grade pupils shall not be located more than one (1) storey above the floor of exit discharge.`,
        key: 'rooms_used'
      },
      {
        label: `80. Provide firefighters’ elevator.`,
        val:  `Provide firefighters’ elevator.`,
        key: 'firefighters'
      },
      {
        label: `81. All correction indicated on the original approved plan from this office on shall be followed.`,
        val:  `All correction indicated on the original approved plan from this office on shall be followed.`,
        key: 'correction_indicated'
      },
      {
        label: `82. Any changes in occupancy other than stated shall be in accordance with Rule 10.`,
        val:  `Any changes in occupancy other than stated shall be in accordance with Rule 10.`,
        key: 'occupancy_other'
      },
      {
        label: `83. Subject to inspection during construction.`,
        val:  `Subject to inspection during construction.`,
        key: 'Subject_to_inspection'
      },
      {
        label: `84. Fire Safety Inspection Certificate must be secured before/prior to issuance of Certificate of Occupancy.`,
        val:  `Fire Safety Inspection Certificate must be secured before/prior to issuance of Certificate of Occupancy.`,
        key: 'Subject_to_inspection'
      },
      {
        label: `85. Subject to additional requirements upon recommendation of the Fire Safety Inspector during construction phase and final inspection.`,
        val:  `Subject to additional requirements upon recommendation of the Fire Safety Inspector during construction phase and final inspection.`,
        key: 'subject_to_additional'
      }]
    }
  }
}
