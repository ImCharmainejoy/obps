export default {
  data () {
    return {
      classifications: [
        {
          class_id: 1,
          text: 'A-1 Residential Dwellings',
          subtext: 'Low Density Residential (R-1)'
        },
        {
          class_id: 2,
          text: 'A-2 Residential Dwellings',
          subtext: 'Basic - Medium Density Residential (R-2)'
        },
        {
          class_id: 3,
          text: 'A-2 Residential Dwellings',
          subtext: 'Maximum - Medium Density Residential (R-2)'
        },
        {
          class_id: 4,
          text: 'B-1 Residentials, Hotels, and Apartments',
          subtext: 'Basic - High Density Residential (R-3)'
        },
        {
          class_id: 5,
          text: 'B-1 Residentials, Hotels, and Apartments',
          subtext: 'Maximum - High Density Residential (R-3)'
        },
        {
          class_id: 6,
          text: 'B-1 Residentials, Hotels, and Apartments',
          subtext: 'R-4'
        },
        {
          class_id: 7,
          text: 'B-1 Residentials, Hotels, and Apartments',
          subtext: 'R-5'
        },
        {
          class_id: 8,
          text: 'C-1 Education and Recreation',
          subtext: 'Institutional (Ins)'
        },
        {
          class_id: 9,
          text: 'C-2 Education and Recreation',
          subtext: 'Parks and Recreation (PR) - GI (Ins)'
        },
        {
          class_id: 10,
          text: 'D-1 Institutional',
          subtext: 'GI - Special Institution (SIns)'
        },
        {
          class_id: 11,
          text: 'D-2 Institutional',
          subtext: 'Institutional (Ins)'
        },
        {
          class_id: 12,
          text: 'D-3 Institutional',
          subtext: 'Institutional (Ins)'
        },
        {
          class_id: 13,
          text: 'E-1 Business and Mercantile',
          subtext: 'Minor Commercial (C-1)'
        },
        {
          class_id: 14,
          text: 'E-1 Business and Mercantile',
          subtext: 'Infrastructure/Utilities (UTS)'
        },
        {
          class_id: 15,
          text: 'E-2 Business and Mercantile',
          subtext: 'Major Commercial (C-2)'
        },
        {
          class_id: 16,
          text: 'E-2 Business and Mercantile',
          subtext: 'Special Use (SU)'
        },
        {
          class_id: 17,
          text: 'E-3 Business and Mercantile',
          subtext: 'C-3'
        },
        {
          class_id: 18,
          text: 'F-1 Industrial',
          subtext: 'Light Industrial (I-1)'
        },
        {
          class_id: 19,
          text: 'G-1 Storage and Hazardous',
          subtext: 'Medium Industrial (I-2)'
        },
        {
          class_id: 20,
          text: 'G-1 Storage and Hazardous',
          subtext: 'Infrastructure/Utilities (UTS)'
        },
        {
          class_id: 21,
          text: 'G-2 Storage and Hazardous',
          subtext: 'Medium Industrial (I-2)'
        },
        {
          class_id: 22,
          text: 'G-3 Storage and Hazardous',
          subtext: 'Medium Industrial (I-2)'
        },
        {
          class_id: 23,
          text: 'G-4 Storage and Hazardous',
          subtext: 'Medium Industrial (I-2)'
        },
        {
          class_id: 24,
          text: 'G-5 Storage and Hazardous',
          subtext: 'Medium Industrial (I-2)'
        },
        {
          class_id: 25,
          text: 'H-1 Assembly other than Group I',
          subtext: 'PRE - Parks and Recreation (PR)'
        },
        {
          class_id: 26,
          text: 'H-1 Assembly other than Group I',
          subtext: 'CUL - Institutional (Ins)'
        },
        {
          class_id: 27,
          text: 'H-2 Assembly other than Group I',
          subtext: 'Institutional (Ins)'
        },
        {
          class_id: 28,
          text: 'H-3 Assembly other than Group I',
          subtext: 'Institutional (Ins)'
        },
        {
          class_id: 29,
          text: 'H-4 Assembly other than Group I',
          subtext: 'Institutional (Ins)'
        },
        {
          class_id: 30,
          text: 'I-1 Assembly Occupant Load 1000 or More',
          subtext: 'CUL - Institutional (Ins)'
        },
        {
          class_id: 31,
          text: 'I-1 Assembly Occupant Load 1000 or More',
          subtext: 'PRE - Parks and Recreation (PR)'
        },
        {
          class_id: 32,
          text: 'J-1 Accessory',
          subtext: 'Agricultural (AG)'
        },
        {
          class_id: 33,
          text: 'J-1 Accessory',
          subtext: 'Agro-Industrial (AgI)'
        },
        {
          class_id: 34,
          text: 'J-1 Accessory',
          subtext: 'Planned Unit Development (PUD)'
        },
        {
          class_id: 35,
          text: 'J-2 Accessory',
          subtext: 'Planned Unit Development (PUD)'
        },
        {
          class_id: 36,
          text: 'J-3 Accessory',
          subtext: ''
        }
      ],
      descriptions: [
        {
          class_id: [1],
          text: 'R-1',
          rule: 'NBCP Rule VII Sec 701',
          rule_desc: 'R-1 Single-detached (not duplex, not townhouse); single family use.',
          rule_desc_class: 'ml-2 red--text font-weight-bold',
          items: [
            {
              text: 'Setback',
              rule: 'NBCP Rule VIII Table VIII.2 Minimum Setbacks for Residential Buildings/Structures',
              lists: [
                {
                  flex: 'xs12',
                  text: 'Front:',
                  value: '4.5 m'
                },
                {
                  flex: 'xs12',
                  text: ' Side:',
                  value: '2 m'
                },
                {
                  flex: 'xs12',
                  text: ' Rear:',
                  value: '2 m'
                }
              ]
            },
            {
              text: 'Firewall',
              rule: 'NBCP Rule VII Sec 704',
              lists: [
                {
                  flex: 'xs12',
                  text: 'Absolutely no firewall allowed. ',
                  textclass: 'font-weight-normal'
                },
                {
                  flex: 'xs12',
                  text: ' An abutment solely for the purpose of supporting carport roof is allowed.',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Maximum Height:',
                      value: 'up to',
                      value_a: '3.2 m',
                      valueaclass: 'font-weight-bold',
                      value_b: 'from established grade level'
                    },
                    {
                      text: 'Maximum Length:',
                      value_a: '7 m or 50%',
                      valueaclass: 'font-weight-bold',
                      value_b: 'of the property line in total length, whichever is shorter.'
                    },
                    {
                      text: 'Material:',
                      value: 'perforated or decorative concrete blocks above',
                      value_a: '1.5 m.',
                      valueaclass: 'font-weight-bold',
                    }
                  ]
                }
              ]
            },
            {
              text: 'Parking',
              rule: 'Table VII.4 Minimum Required Off-Street (Off-RROW) cum On-Site Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use/Occupancy',
              lists: [
                {
                  flex: 'xs12',
                  text: 'Minimum no. of Parking Slots:',
                  value: '1 parking slot per lot'
                }
              ]
            },
            {
              text: 'Building Height Limit (BHL)',
              rule: ' NBCP, Table VII.2, Building Height Limit (BHL) by Type of Use or Occupancy',
              lists: [
                {
                  flex: 'xs12',
                  text: 'Number of floors –',
                  value: 'maximum of three (3) storeys'
                },
                {
                  flex: 'xs12',
                  text: ' Height in meters –',
                  value: 'maximum of 10 m above highest grade'
                }
              ]
            },
            {
              text: 'Percentage Site Occupancy (PSO)',
              rule: 'NBCP Rule VII Sec 705',
              subitems: [
                {
                  flex: 'xs12',
                  text: 'TGFA - Total Gross Floor Area',
                  textclass: 'ml-4 my-0 py-0 red--text font-weight-bold'
                },
                {
                  flex: 'xs12',
                  text: 'TLA - Total Lot Area',
                  textclass: 'ml-4 my-0 py-0 red--text font-weight-bold'
                },
                {
                  flex: 'xs12',
                  text: 'PSO - Percentage Site Occupancy',
                  textclass: 'ml-4 my-0 py-0 red--text font-weight-bold'
                },
                {
                  text: '',
                  rule: 'Percentage Site Occupancy based on lot types - Figures VIII.1 - VIII.11',
                  ruleclass: 'my-0 py-0 caption font-weight-normal font-italic',
                  rule_desc: 'Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
                  rule_desc_class: 'my-0 py-0 caption font-weight-normal font-italic',
                  listsa: [
                    {
                      text: 'Interior (or Rear Lot) and End Lot:',
                      value: ' 60% of TLA'
                    },
                    {
                      text: 'Inside (or Regular Lot):',
                      value: '50% of TLA',
                      valueclass: 'font-weight-bold'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '50% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '70% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '70% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more Streets, Rivers, etc.:',
                      value: '70% of TLA',
                      rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
                      ruleclass: 'my-0 py-0 caption font-weight-normal font-italic',
                    },
                    {
                      text: 'Regular Inside Lot:',
                      value: '50% of TLA'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          class_id: [2, 3],
          text: 'R2',
          rule: 'NBCP Rule VII Sec 701',
          subitems: [
            {
              class_id: [2],
              text: 'Basic R-2,',
              textclass: 'red--text font-weight-bold',
              value: 'single-attached or duplex building/structure from one (1) storey up to three (3) storeys; each unit for separate use as single family dwellings.',
              valueclass: 'red--text'
            },
            {
              class_id: [3],
              text: 'Maximum R-2,',
              textclass: 'red--text font-weight-bold',
              value: 'low-rise multi-level building/structure from three (3) up to five (5) storeys; multiple family dwellings.',
              valueclass: 'red--text'
            }
          ],
          items: [
            {
              text: 'Setback',
              rule: 'NBCP, Rule VIII, Table VIII.2, Minimum Setbacks for Residential Buildings/Structures',
              subitems: [
                {
                  class_id: [2],
                  text: 'R-2 (Basic):',
                  textclass: 'my-0 py-0 font-weight-bold',
                  value: '3.00m (front), 2.00m**(side), 2.00m (rear)'
                },
                {
                  class_id: [3],
                  text: 'R-2 (Maximum):',
                  textclass: 'my-0 py-0 font-weight-bold',
                  value: '8.00m* (front), 2.00m**(side), 2.00m (rear)'
                },
                {
                  flex: 'xs12',
                  class_id: [2, 3],
                  rule: '* Total setback only at grade (or natural ground) level, i.e., 3.00m + 5.00m = 8.00 meters  (to accomodate part of the minimum parking requirement outside the designated area of the front yard). The second and upper floors and mezzanine level shall thereafter comply with the minimum 3.00m setback unless otherwise provided under the Code.',
                  ruleclass: 'my-0 py-0 body-2 font-weight-normal font-italic',
                  rule_desc: '** Setback required for only one (1) side. Setbacks on two (2) sides, optional.',
                  rule_desc_class: 'my-0 py-0 body-2 font-weight-normal font-italic',
                }
              ]
            },
            {
              text: 'Firewall',
              rule: 'NBCP, Rule VIII, Table VIII.2, Minimum Setbacks for Residential Buildings/Structures',
              lists: [
                {
                  flex: 'xs12',
                  text: 'Firewall is allowed on only one (1) side property line.',
                  textclass: 'font-weight-normal'
                },
                {
                  flex: 'xs12',
                  text: 'Applicable stipulations of the Fire Code should be strictly followed.',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      value: 'Maximum of 80% of the total length of a side property line.',
                    },
                    {
                      text: 'Above or along property line, absolutely no openings, except for permitted vent wells.',
                      textclass: 'font-weight-normal',
                      value: '(NBCP Glossary)',
                      class: 'font-italic'
                    },
                    {
                      text: 'Shall extend above the roof from 400mm to 1000mm.',
                      textclass: 'font-weight-normal',
                      value: '(NBCP Glossary)',
                      class: 'font-italic'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Parking',
              rule: 'NBCP, Table VII.4 Minimum, Required Off-Street (Off-RROW) cum On-Site Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use/Occupancy',
              lists: [
                {
                  flex: 'xs12',
                  text: 'Minimum no. of Parking Slots:',
                  value: '1 parking slot per lot',
                  value_n: 'Size: 2.50m by 5.00m - perpendicular parking',
                  valuenclass: 'font-weight-normal',
                  value_n1: '2.15m by 6.00m - parallel parking',
                  valuen1class: 'font-weight-normal'
                }
              ]
            },
            {
              text: 'Building Height Limit (BHL)',
              rule: 'NBCP, Rule VII, Sec 705(2), Table VII.2, Building Height Limit (BHL) by Type or Occupancy',
              subitems: [
                {
                  class_id: [2],
                  text: 'R-2 (Basic)',
                  lists: [
                    {
                      text: 'Number of floors –',
                      value: 'maximum of three (3) storeys'
                    },
                    {
                      text: 'Height in meters –',
                      value: 'maximum of 10.00 m above highest grade'
                    }
                  ]
                },
                {
                  class_id: [3],
                  text: 'R-2 (Maximum)',
                  lists: [
                    {
                      text: 'Number of floors –',
                      value: 'maximum of five (5) storeys'
                    },
                    {
                      text: 'Height in meters –',
                      value: 'maximum of 15.00 m above highest grade'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Percentage Site Occupancy (PSO)',
              rule: 'NBCP, Rule VII, Sec 705',
              subitems: [
                {
                  flex: 'xs12',
                  text: 'TGFA - Total Gross Floor Area',
                  textclass: 'ml-4 my-0 py-0 red--text font-weight-bold'
                },
                {
                  flex: 'xs12',
                  text: 'TLA - Total Lot Area',
                  textclass: 'ml-4 my-0 py-0 red--text font-weight-bold'
                },
                {
                  flex: 'xs12',
                  text: 'PSO - Percentage Site Occupancy',
                  textclass: 'ml-4 my-0 py-0 red--text font-weight-bold',
                  rule: 'Percentage Site Occupancy based on lot types - Figures VIII.1 - VIII.11',
                  ruleclass: 'my-0 py-0 caption font-weight-normal font-italic',
                  rule_desc: 'Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
                  rule_desc_class: 'my-0 py-0 caption font-weight-normal font-italic',
                  listsa: [
                    {
                      text: 'Interior (or Rear Lot) and End Lot:',
                      value: '70% of TLA'
                    },
                    {
                      text: 'Inside (or Regular Lot):',
                      value: '60% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '70% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '70% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '70% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more Streets, Rivers, etc.:',
                      value: '70% of TLA'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          class_id: [4, 5],
          text: 'R3',
          rule: 'NBCP Rule VII Sec 701',
          rule_desc: 'Low to medium rise, high density residential condominium building',
          rule_desc_class: 'ml-4 red--text font-weight-normal',
          subitems: [
            {
              class_id: [4],
              text: '– Basic R-3',
              textclass: 'ml-4 red--text font-weight-bold',
              value: ', rowhouse building/structure from one (1) up to three (3) storeys high, separate single-family dwellings each unit',
              valueclass: 'red--text'
            },
            {
              class_id: [5],
              text: '– Maximum R-3',
              textclass: 'ml-4 red--text font-weight-bold',
              value: ', medium rise multilevel building/structure from six (6) up to 12) storeys high, for multiple family dwelling units',
              valueclass: 'red--text'
            }
          ],
          items: [
            {
              text: 'Setback',
              rule: 'NBCP Rule VIII Table VIII.2 Minimum Setbacks for Residential Buildings/Structures',
              subitems: [
                {
                  class_id: [4],
                  text: 'R-3 (Basic):',
                  textclass: 'ml-2 font-weight-bold',
                  value: '3.00m (front), *** (side), ***  (rear)'
                },
                {
                  class_id: [5],
                  text: 'R-3 (Maximum):',
                  textclass: 'ml-2 font-weight-bold',
                  value: '8.00m* (front), 2.00m (side)(optional), 2.00m (rear)'
                },
                {
                  flex: 'xs12',
                  rule: '*Total setback only at grade (or natural ground) level, i.e., 3.00m + 5.00m = 8.00m (to accommodate part of the minimum parking requirement outside the designated area for the front yard). The second and upper floors and mezzanine level shall thereafter comply with the minimum 3.00m setback unless otherwise provided under the Code',
                  rule_desc: '***Abutments on two sides and rear property lines may be allowed with conditions as enumerated under Section 804.10 of this Rule',
                  ruleclass: 'my-0 py-0 caption font-weight-normal font-italic',
                  rule_desc_class: 'my-0 py-0 caption font-weight-normal font-italic'
                }
              ]
            },
            {
              text: 'Firewall',
              rule: 'NBCP Rule VII, Section 704 (C)(iv)',
              lists: [
                {
                  class_id: [4,5],
                  text: ' Firewall on two (2) sides',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Maximum Height:',
                      value: 'for',
                      value_a: 'two (2) storey height',
                      valueaclass: 'font-weight-bold',
                      value_b: 'structure'
                    },
                    {
                      text: 'Maximum Length: 85%',
                      value: 'of the property line on each side, but not exceeding',
                      value_a: '65%',
                      valueaclass: 'font-weight-bold',
                      value_b: 'of total lot perimeter'
                    }
                  ]
                },
                {
                  class_id: [4,5],
                  text: 'Firewall on one (1) side + rear',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Maximum Height:',
                      value: 'for',
                      value_a: 'two (2) storey height',
                      valueaclass: 'font-weight-bold',
                      value_b: 'structure, or up to',
                      value_c: '3.2 m',
                      valuecclass: 'font-weight-bold',
                      value_d: 'from established grade level'
                    },
                    {
                      text: 'Maximum Length: 90%',
                      value: 'of total length of side and rear property line, or',
                      value_a: '100%',
                      valueaclass: 'font-weight-bold',
                      value_b: 'if rear property line is only 4m wide, but not exceeding',
                      value_c: '50%',
                      valuecclass: 'font-weight-bold',
                      value_d: 'of total lot perimeter'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Parking',
              rule: 'Table VII.4 Minimum Required Off-Street (Off-RROW) cum On-Site Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use/Occupancy',
              lists: [
                {
                  flex: 'xs12',
                  class_id: [4,5],
                  text: 'Minimum no. of Parking Slots:',
                  value: '1 parking slot per 4 lots or dwelling units'
                }
              ]
            },
            {
              text: 'Building Height Limit (BHL)',
              rule: 'Table VII.2 Building Height Limit (BHL) by Type of Use or Occupancy',
              lists: [
                {
                  flex: 'xs12',
                  class_id: [4],
                  text: 'R-3 Basic:',
                  value: 'maximum of three (3) storeys or 10m above highest grade'
                },
                {
                  flex: 'xs12',
                  class_id: [5],
                  text: 'R-3 Maximum:',
                  value: 'maximum of twelve (12) storeys or 36m above highest grade'
                }
              ]
            },
            {
              text: 'Minimum RROW',
              rule: 'Table VIII.G.3 Minimum Road Right-of-Way (RROW) Provisions for Developments with Multiple Dwelling Units',
              lists: [
                {
                  class_id: [4,5],
                  text: 'Up to six (6) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '3m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '0.6m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '4.2m'
                    }
                  ]
                },
                {
                  class_id: [4,5],
                  text: 'Seven (7) to fifteen (15) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '4m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '6m'
                    }
                  ]
                },
                {
                  class_id: [4,5],
                  text: 'Sixteen (16) to twenty-five (25) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '5m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '7m'
                    }
                  ]
                },
                {
                  class_id: [4,5],
                  text: 'Twenty-six (26) to thirty-five (35) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '6m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '8m'
                    }
                  ]
                },
                {
                  class_id: [4,5],
                  text: 'Thirty-five (35) Dwelling Units or more',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '6.7m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '8.7m'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Percentage Site Occupancy (PSO)',
              rule: 'NBCP Rule VII Sec 705',
              subitems: [
                {
                  flex: 'xs12',
                  text: 'TGFA - Total Gross Floor Area',
                  textclass: 'ml-4 red--text font-weight-bold'
                },
                {
                  flex: 'xs12',
                  text: 'TLA - Total Lot Area',
                  textclass: 'ml-4 red--text font-weight-bold'
                },
                {
                  text: 'PSO - Percentage Site Occupancy',
                  textclass: 'ml-4 red--text font-weight-bold',
                  rule: 'Percentage Site Occupancy based on lot types - Figures VIII.1 - VIII.11',
                  rule_desc: 'Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
                  ruleclass: 'my-0 py-0 caption font-weight-normal font-italic',
                  rule_desc_class: 'my-0 py-0 caption font-weight-normal font-italic'
                }
              ],
              listsa: [
                {
                  class_id: [4],
                  text: 'All Lot types (R-3 Basic):',
                  value: '70% of TLA',
                  rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
                  ruleclass: 'my-0 py-0 caption font-weight-normal font-italic'
                },
                {
                  class_id: [5],
                  text: 'All Lot types (R-3 Maximum):',
                  value: '80% of TLA',
                  rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
                  ruleclass: 'my-0 py-0 caption font-weight-normal font-italic'
                },
                {
                  class_id: [4],
                  text: 'All Lot types (R-3 Basic):',
                  value: '65% of TLA (without firewall), 70% of TLA (with firewall)'
                },
                {
                  class_id: [5],
                  text: 'All Lot types (R-3 Maximum):',
                  value: '70% of TLA (without firewall), 80% of TLA (with firewall)'
                }
              ]
            },
            {
              text: 'Occupant Load',
              rule: 'Rule XII. Section 1207 Table XII.1',
              listsb: [{
                text: 'Dwellings',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '28.0 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '10'
                }]
              },
              {
                text: 'Hotels, Apartments, Dormitories',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '18.6 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '10'
                }]
              }]
            }
          ]
        },
        {
          class_id: [6],
          text: 'R4',
          rule: 'NBCP Rule VII Sec 701',
          rule_desc: 'Medium to high-density residential use; low-rise townhouse as multiple family dwelling; series of rows of R-4 within a subdivided lot/property',
          rule_desc_class: 'red--text',
          items: [
            {
              text: 'Setback',
              rule: ' NBCP Rule VIII Table VIII.2 Minimum Setbacks for Residential Buildings/Structures',
              subitems: [
                {
                  text: 'Individual lot/units',
                  lists: [
                    {
                      text: 'Front               – ',
                      value: '4.5 m'
                    },
                    {
                      text: 'Side               – ',
                      value: '2 m (optional)'
                    },
                    {
                      text: 'Rear               – ',
                      value: '2 m'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Firewall',
              rule: 'NBCP Rule VII, Section 704 (C)(iv)',
              lists: [
                {
                  text: 'Firewall on two (2) sides',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Maximum Height:',
                      value: 'for',
                      value_a: 'three (3) storey height',
                      valueaclass: 'font-weight-bold',
                      value_b: 'structure'
                    },
                    {
                      text: 'Maximum Length: 85%',
                      value: 'of the property line on each side, but not exceeding',
                      value_a: '50%',
                      valueaclass: 'font-weight-bold',
                      value_b: 'of total lot perimeter'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Parking',
              rule: 'Table VII.4 Minimum Required Off-Street (Off-RROW) cum On-Site Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use/Occupancy',
              lists: [
                {
                  text: 'Minimum no. of Parking slots',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Units of 50 sqm:',
                      value: '1 slot every two (2) units'
                    },
                    {
                      text: 'Units of 50-150 sqm:',
                      value: '1 slot every unit'
                    },
                    {
                      text: 'Units above 150 sqm:',
                      value: '2 slots every unit'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Building Height Limit (BHL)',
              rule: 'Table VII.2 Building Height Limit (BHL) by Type of Use or Occupancy',
              listsa: [
                {
                  text: 'Number of floors',
                  value: '– maximum of three (3) storeys'
                },
                {
                  text: 'Height in meters',
                  value: '– maximum of 10 m above highest grade'
                }
              ]
            },
            {
              text: 'Minimum RROW',
              rule: 'Table VIII.G.3 Minimum Road Right-of-Way (RROW) Provisions for Developments with Multiple Dwelling Units',
              lists: [
                {
                  text: 'Up to six (6) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '3m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '0.6m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '4.2m'
                    }
                  ]
                },
                {
                  text: 'Seven (7) to fifteen (15) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '4m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '6m'
                    }
                  ]
                },
                {
                  text: 'Sixteen (16) to twenty-five (25) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '5m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '7m'
                    }
                  ]
                },
                {
                  text: 'Twenty-six (26) to thirty-five (35) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '6m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '8m'
                    }
                  ]
                },
                {
                  text: 'Thirty-five (35) Dwelling Units or more',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '6.7m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '8.7m'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Percentage Site Occupancy (PSO)',
              rule: 'NBCP Rule VII Sec 705',
              subitems: [
                {
                  flex: 'xs12',
                  text: 'TGFA - Total Gross Floor Area',
                  textclass: 'ml-2 red--text font-weight-bold'
                },
                {
                  flex: 'xs12',
                  text: 'TLA - Total Lot Area',
                  textclass: 'ml-2 red--text font-weight-bold'
                },
                {
                  flex: 'xs12',
                  text: 'PSO - Percentage Site Occupancy',
                  textclass: 'ml-2 red--text font-weight-bold',
                  rule: 'Percentage Site Occupancy based on lot types - Figures VIII.1 - VIII.11',
                  rule_desc: 'Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)'
                }
              ],
              listsa: [
                {
                  flex: 'xs12',
                  text: 'All Lot types (R-4):',
                  value: '80% of TLA',
                  rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
                },
                {
                  flex: 'xs12',
                  text: 'All Lot types (R-4):',
                  value: '70% of TLA (without firewall), 80% of TLA (with firewall)'
                }
              ]
            },
            {
              text: 'Occupant Load',
              rule: 'Rule XII. Section 1207 Table XII.1',
              listsb: [{
                text: 'Dwellings',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '28.0 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '10'
                }]
              },
              {
                text: 'Hotels, Apartments, Dormitories',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '18.6 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '10'
                }]
              }]
            }
          ]
        },
        {
          class_id: [7],
          text: 'R5',
          rule: 'NBCP Rule VII Sec 701',
          rule_desc: 'Very high density residential; medium to high rise condominium as multiple family dwelling',
          rule_desc_class: 'red--text',
          items: [
            {
              text: 'Setback',
              rule: ' NBCP Rule VIII Table VIII.2 Minimum Setbacks for Residential Buildings/Structures',
              lists: [
                {
                  text: 'Front              –',
                  value: '6 m'
                },
                {
                  text: 'Side              –',
                  value: '3 m'
                },
                {
                  flex: 'xs12',
                  text: 'Rear              –',
                  value: '3 m',
                  rule: '**** Mixed-Use Buildings in R-5 lots shall be considered a commercial use or occupancy if a substantial percentage is commercial'
                }
              ],
            },
            {
              text: 'Firewall',
              rule: 'NBCP Rule VII, Section 704 (C)(iv)',
              lists: [
                {
                  text: 'Firewall on two (2) sides',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Maximum Height:',
                      value: 'up to',
                      value_a: 'eight (8) storey height',
                      valueaclass: 'font-weight-bold',
                      value_b: 'structure (podium)'
                    },
                    {
                      text: 'Maximum Length: 75%',
                      value: 'of the property line on each side, but not exceeding',
                      value_a: '50%',
                      valueaclass: 'font-weight-bold',
                      value_b: 'of total lot perimeter'
                    }
                  ]
                },
                {
                  text: 'Firewall on one (1) side + rear',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Maximum Height:',
                      value: 'up to',
                      value_a: 'eight (8) storey height',
                      valueaclass: 'font-weight-bold',
                      value_b: 'structure (podium)'
                    },
                    {
                      text: 'Maximum Length: 65%',
                      value: 'of total length of side and rear property line, and',
                      value_a: '50%',
                      valueaclass: 'font-weight-bold',
                      value_b: 'if rear property line is only 4m wide, but not exceeding 60%  of total lot perimeter'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Parking',
              rule: 'Table VII.4 Minimum Required Off-Street (Off-RROW) cum On-Site Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use/Occupancy',
              lists: [
                {
                  text: 'Condominiums',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Units of 18-22 sqm:',
                      value: '1 slot for every eight (8) units'
                    },
                    {
                      text: 'Units up to 50 sqm:',
                      value: '1 slot for every six (6) medium-cost units or 1 slot for every open market unit (based on PD 957 IRR)'
                    },
                    {
                      text: 'Units of 50-100 sqm:',
                      value: '1 slot for every 4 medium-cost units or 1 slot for every open market unit (based on PD 957 IRR)'
                    }
                  ]
                },
                {
                  text: 'Hotels',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'For Highly Urbanized Areas:',
                      value: '1 slot for every three (3) rooms, 1 slot for every seven (7) rooms for a fraction for all other areas'
                    },
                    {
                      text: '2 tourist bus slots per hotel'
                    },
                    {
                      text: '1 loading slot for articulated truck or vehicle'
                    }
                  ]
                },
                {
                  text: 'Residential Hotels and Apartels',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: '1 slot for every 5 units'
                    },
                    {
                      text: '1 bus parking slot for every sixty (60) units'
                    }
                  ]
                },
                {
                  text: 'Motels',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: '1 slot for every unit'
                    }
                  ]
                },
                {
                  text: 'Pension/boarding/lodging houses',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: '1 slot for every twenty (20) beds'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Minimum RROW',
              rule: ' Table VIII.G.3 Minimum Road Right-of-Way (RROW) Provisions for Developments with Multiple Dwelling Units',
              lists: [
                {
                  text: 'Up to six (6) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '3m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '0.6m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '4.2m'
                    }
                  ]
                },
                {
                  text: 'Seven (7) to fifteen (15) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '4m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '6m'
                    }
                  ]
                },
                {
                  text: 'Sixteen (16) to twenty-five (25) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '5m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '7m'
                    }
                  ]
                },
                {
                  text: 'Twenty-six (26) to thirty-five (35) Dwelling Units',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '6m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '8m'
                    }
                  ]
                },
                {
                  text: 'Thirty-five (35) Dwelling Units or more',
                  textclass: 'font-weight-normal',
                  listsa: [
                    {
                      text: 'Minimum width of carriageway:',
                      value: '6.7m'
                    },
                    {
                      text: 'Minimum width of sidewalk on each side:',
                      value: '1m'
                    },
                    {
                      text: 'Minimum total width of RROW:',
                      value: '8.7m'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Building Height Limit (BHL)',
              rule: ' Table VII.2 Building Height Limit (BHL) by Type of Use or Occupancy',
              lists: [
                {
                  text: 'Number of floors',
                  value: '– twelve to eighteen (12-18) storeys'
                },
                {
                  text: 'Height in meters',
                  value: '– 36 -54 m above highest grade'
                }
              ]
            },
            {
              text: 'Occupant Load',
              rule: 'Rule XII. Section 1207 Table XII.1',
              listsb: [{
                text: 'Dwellings',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '28.0 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '10'
                }]
              },
              {
                text: 'Hotels, Apartments, Dormitories',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '18.6 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '10'
                }]
              }]
            },
            {
              text: 'Percentage Site Occupancy (PSO)',
              rule: ' NBCP Rule VII Sec 705',
              subitems: [
                {
                  flex: 'xs12',
                  text: 'TGFA - Total Gross Floor Area',
                  textclass: 'red--text font-weight-bold'
                },
                {
                  flex: 'xs12',
                  text: 'TLA - Total Lot Area',
                  textclass: 'red--text font-weight-bold'
                },
                {
                  flex: 'xs12',
                  text: 'PSO - Percentage Site Occupancy',
                  textclass: 'red--text font-weight-bold',
                  rule: 'Percentage Site Occupancy based on lot types - Figures VIII.1 - VIII.11',
                  rule_desc: 'Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
                  listsa: [{
                    text: 'All Lot types (R-5):',
                    value: '80% of TLA',
                    rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA',
                  },
                  {
                    text: 'All Lot types (R-4):',
                    value: '70% of TLA (without firewall), 80% of TLA (with firewall)'
                  }]
                }
              ]
            }
          ]
        },
        {
          class_id: [8, 9],
          text: 'C. Education and Recreation',
          rule: 'NBCP Rule VII Sec 701',
          rule_desc: `Buildings used for school or day-care purposes, i.e. instruction, education, or recreation`,
          rule_desc_class: 'red--text',
          subitems: [
            {
              class_id: [8],
              text: 'Division C-1',
              textclass: 'font-weight-bold',
              list_num: [
                {
                  value: 'Schools, colleges, universities, vocational, institutions'
                },
                {
                  value: 'School auditoriums, gymnasia, reviewing stands, little theaters, concert halls, opera houses'
                },
                {
                  value: 'Libraries, museums, exhibition halls, art galleries'
                },
                {
                  value: 'Seminaries, convents, churches, mosques, temples, shrines, and places of worship'
                },
                {
                  value: 'Civic or government centers'
                }
              ]
            },
            {
              class_id: [9],
              text: 'Division C-2',
              textclass: 'font-weight-bold',
              rule_desc: `GI (General Institutional) - low rise, medium rise or high rise building/structure for medical.`,
              rule_desc_class: 'ml-5 red--text',
              list_num: [
                {
                  value: 'Amusement halls and parlors'
                },
                {
                  value: 'Massage and sauna parlors, health studios and reducing salons'
                },
                {
                  value: 'Billiard halls, pool rooms, bowling alleys, golf clubhouses'
                },
                {
                  value: 'Dancing schools, disco pads, dance and amusement halls'
                },
                {
                  value: 'Gymnasia, pelota courts and sports complex'
                }
              ]
            }
          ],
          items: [{
            text: 'Setback',
            rule: 'Table VIII.3 Setbacks for Commercial, Industrial, Institutional and Recreational Buildings',
            listsa: [
              {
                text: '30.00m & above (Road Right-of-Way)',
                textclass: 'font-weight-normal',
                subitems: [{
                  value: '- 8.00m (front), 5.00m (side), 5.00m (rear)'
                }]
              },
              {
                text: '25.00m to 29.00m (Road Right-of-Way)',
                textclass: 'font-weight-normal',
                subitems: [{
                  value: '- 6.00m (front), 3.00m (side), 3.00m (rear)'
                }]
              },
              {
                text: '20.00m to 24.00 (Road Right-of-Way)',
                textclass: 'font-weight-normal',
                subitems: [{
                  value: '- 5.00m (front), 3.00m (side), 3.00m (rear)'
                }]
              },
              {
                text: '10.00m to 19.00 (Road Right-of-Way)',
                textclass: 'font-weight-normal',
                subitems: [{
                  value: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                }]
              },
              {
                text: 'Below 10.00m (Road Right-of-Way)',
                textclass: 'font-weight-normal',
                subitems: [{
                  value: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                }]
              }
            ]
          },
          {
            text: 'Firewall',
            rule: 'NBCP Rule VII, Section 704 (C)(iv)',
            listsa: [
              {
                flex: 'xs12',
                text: 'Maximum Length:',
                value: 'up to 70% of the property line'
              },
              {
                flex: 'xs12',
                text: 'Conditions:',
                listsb: [
                  {
                    text: 'Provision of fully functional sprinkler system'
                  },
                  {
                    text: 'Installation of other fire-retardant or fire suppression devices'
                  },
                  {
                    text: 'Prescribed setbacks, yards, and courts fronting the RROW are fully complied'
                  },
                  {
                    text: 'All applicable stipulations of the Fire Code (RA 9514) are strictly followed:',
                      listsc: [
                      {
                        text: 'Number, type, location of fire exits'
                      }]
                  }
                ]
              }
            ]
          },
          {
            text: 'Parking',
            rule: 'Table VII.4 Minimum Required Off-Street (Off-RROW) cum On-Site Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use/Occupancy',
            subitems: [
              {
                class_id: [8],
                text: 'Division C-1',
                lists: [{
                  text: 'Bowling alleys',
                  textclass: 'font-weight-normal',
                  listsa: [{
                    value: '1 car slot for every four (4) alleys'
                  }]
                },
                {
                  text: 'Churches and Similar Places of worship',
                  textclass: 'font-weight-normal',
                  listsa: [{
                    value: '1 car slot and 1 jeepney/shuttle slot for every 50sqm of congregation area'
                  }]
                }]
              },
              {
                class_id: [9],
                text: 'Division C-2',
                lists: [{
                  text: 'Public Schools (elementary, secondary, vocational, trade) (GI)',
                  listsa: [{
                    value: '1 car slot for every ten (10) classrooms'
                  },
                  {
                    value: '1 off-RROW loading space good for 2 jeepneys/shuttles'
                  }]
                },
                {
                  text: 'Private Schools (elementary, secondary, vocational, trade) (GI)',
                  listsa: [{
                    value: '1 car slot for every five (5) classrooms'
                  },
                  {
                    value: '1 off-RROW loading space good for 2 jeepneys/shuttles'
                  },
                  {
                    value: '1 school bus slot for every one hundred (100) students'
                  }]
                },
                {
                  text: 'Public Colleges and Universities (GI)',
                  listsa: [{
                    value: '1 car slot for every five (5) classrooms'
                  },
                  {
                    value: '1 off-RROW loading space good for 2 jeepneys/shuttles'
                  },
                  {
                    value: '1 school bus slot for every two hundred (200) students'
                  }]
                },
                {
                  text: ' Private Colleges and Universities (GI)',
                  listsa: [{
                    value: '1 car slot for every three (3) classrooms'
                  },
                  {
                    value: '1 off-RROW loading space good for 2 jeepneys/shuttles'
                  },
                  {
                    value: '1 school bus slot for every two hundred (100) students'
                  }]
                }]
              }
            ]
          },
          {
            text: 'Building Height Limit (BHL)',
            rule: 'Table VII.2 Building Height Limit (BHL) by Type of Use or Occupancy',
            listsa: [
              {
                flex: 'xs12',
                text: 'Institutional:',
                value: '15m or the duly approved BHL in the major zone it is part of'
              },
              {
                flex: 'xs12',
                text: 'Parks and Open Recreational and Entertainment Spaces:',
                value: '15m or the duly approved BHL in the major zone it is part of'
              }
            ]
          },
          {
            flex: 'xs12',
            text: 'Percentage Site Occupancy (PSO)',
            rule: 'Percentage Site Occupancy based on lot types - Figures VIII.1 - VIII.11',
            rule_desc: 'Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
            subitems: [
              {
                text: 'Commercial Group C  (Com-1, Com-2, Com-3)',
                listsa: [{
                  text: 'Interior (or Rear) and End Lot:',
                  value: '80% of TLA'
                },
                {
                  text: 'Inside (or Regular) Lot:',
                  value: '75% of TLA'
                },
                {
                  text: 'Corner Lot:',
                  value: '80% of TLA'
                },
                {
                  text: 'Through Lot:',
                  value: '80% of TLA'
                },
                {
                  text: 'Corner Through Lot:',
                  value: '90% of TLA'
                },
                {
                  text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                  value: '90% of TLA'
                }]
              },
              {
                text: 'Commercial Group C (Com-1, Com-2, Com-3) with sprinkler system & firewalls',
                listsa: [{
                  text: 'Interior (or Rear) and End Lot:',
                  value: '85% of TLA' 
                },
                {
                  text: 'Inside (or Regular) Lot:',
                  value: '85% of TLA'
                },
                {
                  text: 'Corner Lot:',
                  value: '90% of TLA'
                },
                {
                  text: 'Through Lot:',
                  value: '90% of TLA'
                },
                {
                  text: 'Corner Through Lot:',
                  value: '95% of TLA'
                },
                {
                  text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                  value: '95% of TLA'
                }]
              },
              {
                text: 'Institutional (Group D) without sprinkler system & firewalls',
                listsa: [{
                  text: 'Interior (or Rear) and End Lot:',
                  value: '50% of TLA' 
                },
                {
                  text: 'Inside (or Regular) Lot:',
                  value: '50% of TLA'
                },
                {
                  text: 'Corner Lot:',
                  value: '60% of TLA'
                },
                {
                  text: 'Through Lot:',
                  value: '60% of TLA'
                },
                {
                  text: 'Corner Through Lot:',
                  value: '60% of TLA'
                },
                {
                  text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                  value: '60% of TLA'
                }]
              },
              {
                text: 'Institutional (Group D) with sprinkler system & firewalls',
                listsa: [{
                  text: 'Interior (or Rear) and End Lot:',
                  value: '60% of TLA' 
                },
                {
                  text: 'Inside (or Regular) Lot:',
                  value: '60% of TLA'
                },
                {
                  text: 'Corner Lot:',
                  value: '70% of TLA'
                },
                {
                  text: 'Through Lot:',
                  value: '70% of TLA'
                },
                {
                  text: 'Corner Through Lot:',
                  value: '70% of TLA'
                },
                {
                  text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                  value: '70% of TLA'
                }],
                footer_rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)'
              },
              {
                listsa: [{
                  text: 'Com-1:',
                  value: '70% of TLA (without firewall), 80% of TLA (with firewall)' 
                },
                {
                  text: 'Com-2:',
                  value: '75% of TLA (without firewall), 85% of TLA (with firewall)'
                },
                {
                  text: 'Com-3:',
                  value: '80% of TLA (without firewall), 90% of TLA (with firewall)'
                },
                {
                  text: 'Institutional:',
                  value: '50% of TLA (without firewall), 60% of TLA (with firewall)'
                },
                {
                  text: 'Cultural:',
                  value: '60% of TLA (without firewall), 70% of TLA (with firewall)'
                }]
              }
            ]
          },
          {
            flex: 'xs12',
            text: 'Occupant Load',
            rule: 'Rule XII. Section 1207 Table XII.1',
            listsb: [{
              text: 'Classrooms',
              listsc: [{
                text: 'Unit Area per Occupant:',
                value: '1.80 sqm'
              },
              {
                text: 'Min. of 2 exits where no. of occupants is over:',
                value: '50'
              }]
            },
            {
              text: 'Conference Rooms, Exhibit Rooms, Gymnasia',
              listsc: [{
                text: 'Unit Area per Occupant:',
                value: '1.40 sqm'
              },
              {
                text: 'Min. of 2 exits where no. of occupants is over:',
                value: '50'
              }]
            },
            {
              text: 'School Shops, Vocational Institutions, Laboratories',
              listsc: [{
                text: 'Unit Area per Occupant:',
                value: '4.60 sqm'
              },
              {
                text: 'Min. of 2 exits where no. of occupants is over:',
                value: '50'
              }]
            }]
          }]
        },
        {
          class_id: [10,11,12],
          text: 'INSTITUTIONAL (GOVERNMENT and HEALTH SERVICES)',
          rule: 'RULE VII, SECTION 701, TABLE 1',
          subitems: [
            {
              class_id: [10],
              text: 'Division D-1',
              textclass: 'ml-2 font-weight-bold',
              value: 'GI',
              valueclass: 'font-weight-bold',
              value_a: '(General Institutional) - low rise, medium rise or high rise building/structure for medical, government service, administrative and related activities',
              list_num: [{
                value: 'Mental hospitals, mental sanitaria and mental asylums;'
              },
              {
                value: 'Police and fire stations, guard houses;'
              },
              {
                value: 'Jails, prisons, reformatories and correctional institutions; and'
              },
              {
                value: 'Rehabilitation centers.'
              }]
            },
            {
              class_id: [11],
              text: 'Division D-2',
              textclass: 'ml-2 font-weight-bold',
              value: '(Institutional buildings for health care)',
              list_num: [{
                value: 'Hospitals, sanitaria, and homes for the aged'
              },
              {
                value: 'Nurseries for children of kindergarten age or non-ambulatory patients accommodating more than five (5) persons'
              }]
            },
            {
              class_id: [12],
              text: 'Division D-3',
              textclass: 'ml-2 font-weight-bold',
              value: '(Institutional for ambulatory patients or children over kindergarten age)',
              list_num: [{
                value: 'Nursing homes for ambulatory patients'
              },
              {
                value: 'School and home for children over kindergarten age'
              },
              {
                value: 'Orphanages'
              }]
            }
          ],
          items: [
            {
              text: 'Setback',
              rule: 'NBCP, Rule VIII, Table VIII.2, Minimum Setbacks for Residential Buildings/Structures',
              listsa: [
                {
                  text: '30.00m & above (Road Right-of-Way)',
                  textclass: 'font-weight-normal',
                  subitems: [{
                    text: '- 8.00m (front), 5.00m (side), 5.00m (rear)'
                  }]
                },
                {
                  text: '25.00m to 29.00m (Road Right-of-Way)',
                  textclass: 'font-weight-normal',
                  subitems: [{
                    text: '- 6.00m (front), 3.00m (side), 3.00m (rear)'
                  }]
                },
                {
                  text: '20.00m to 24.00m (Road Right-of-Way)',
                  textclass: 'font-weight-normal',
                  subitems: [{
                    text: '- 5.00m (front), 3.00m (side), 3.00m (rear)'
                  }]
                },
                {
                  text: '10.00m to 19.00m (Road Right-of-Way)',
                  textclass: 'font-weight-normal',
                  subitems: [{
                    text: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                  }]
                },
                {
                  text: 'Below 10.00m (Road Right-of-Way)',
                  textclass: 'font-weight-normal',
                  subitems: [{
                    text: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                  }]
                }
              ]
            },
            {
              text: 'Firewall',
              rule: 'NBCP, Rule VII, Section 704 (C)(iv)',
              subitems: [
                {
                  text: 'Institutional (with sprinkler system, other fire retardant or fire suppression devices)',
                  listsa: [
                    {
                      text: 'up to 70%',
                      value: 'of the total perimeter of the property lines, if:',
                      listsd: [{
                        value: 'with proper setbacks, yards and courts fronting the Road Right-of-Way'
                      },
                      {
                        value: 'number, type and locations of fire exits under the Fire Code are strictly followed.'
                      }]
                    }
                  ]
                }
              ]
            },
            {
              flex: 'xs12',
              text: 'Parking',
              rule: 'NBCP, Rule VII, Section 707(c), Table VII.4, Minimum Required Off-Street (Off-RROW) cum On-SIte Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use or Occupancy ',
              subitems: [
                {
                  class_id: [10],
                  text: 'Division D-1 - Mental hospitals, sanitaria and mental asylum and like uses',
                  textclass: 'font-weight-bold',
                  listsa: [{
                    value: 'For every 25 beds - 1 off-street cum on-site car parking slot',
                    subitems: [{
                      text: '- 1 off-RROW (or off-street) passenger loading space that can accommodate 2 queued jeepney/shuttle slots'
                    }]
                  }]
                },
                {
                  class_id: [11],
                  text: 'Division D-2',
                  textclass: 'font-weight-bold',
                  subitems: [
                    {
                      text: '(Public Hospital)',
                      textclass: 'font-weight-bold',
                      listsa: [{
                        value: 'For every 25 beds - 1 off-street cum on-site car parking slot',
                        subitems: [{
                          text: '- 1 off-RROW (or off-street) passenger loading space that can accommodate 2 queued jeepney/shuttle slots'
                        },
                        {
                          text: '- 1 loading slot for articulated  truck or vehicle'
                        }]
                      }]
                    },
                    {
                      text: '(Private Hospital)',
                      textclass: 'font-weight-bold',
                      listsa: [{
                        value: 'For every 12 beds - 1 off-street cum on-site car parking slot',
                        subitems: [{
                          text: '- 1 off-RROW (or off-street) passenger loading space that can accommodate 2 queued jeepney/shuttle slots'
                        },
                        {
                          text: '- 1 loading slot for articulated  truck or vehicle'
                        }]
                      }]
                    }
                  ]
                },
                {
                  class_id: [12],
                  text: 'Division D-3 - Nursing homes for ambulatory patients, school   and home, for children over kindergarten age, orphanages and the like',
                  textclass: 'font-weight-bold',
                  listsa: [{
                    value: 'For every 12 beds - 1 off-street cum on-site car parking slot',
                    subitems: [{
                      text: '- 1 off-RROW (or off-street) passenger loading space that can accommodate 2 queued jeepney/shuttle slots'
                    }]
                  }]
                },
                {
                  text: 'Minimum Parking Space Requirements:',
                  textclass: 'font-weight-bold',
                  rule: 'NBCP, Rule VII, Section 707(4)(b)',
                  listsa: [
                    {
                      value: 'Perpendicular  parking - 2.50m by 5.00m'
                    },
                    {
                      value: 'Parallel parking - 2.15m by 6.00m'
                    },
                    {
                      value: 'Standard truck or bus parking - 3.60m by 12.00m'
                    },
                    {
                      value: 'Articulated truck slot - 3.60m by 12.00m (sufficient to accommodate a 12.00m container van or bulk carrier and a long/hooded prime mover)'
                    },
                    {
                      value: 'Jeepney or Shuttle parking/loading/unloading slot - 3.00m by 9.00m'
                    }
                  ]
                },
                {
                  text: 'Allowed Off-RROW/Off-Street cum Off-Site Parking Provision',
                  textclass: 'font-weight-bold',
                  rule: 'NBCP, Rule VII, Section 707(4)(iv) & (v)',
                  subitems: [
                    {
                      text: 'R-2, R-3, GI, C, C-2 and C3 uses or occupancies',
                      listsa: [{
                        value: 'front yards abutting RROW are not to be used for long-term off-street parking.'
                      },
                      {
                        value: 'front yard shall be used exclusively for driveways, off-RROW loading spaces, short-term off-RROW parking and landscaping treatment.'
                      },
                      {
                        value: 'temporary or short-term off-street parking (driveways), preferably for visitors to the buildings/structures.'
                      }]
                    },
                    {
                      text: 'Basic R-2 and basic R3 uses or occupancies (for single family dwelling units only',
                      listsa: [{
                        value: 'Up to 50% of the front yard abutting the RROW maybe paved/hardscaped, i.e., converted into a courtyard for carport use.'
                      }]
                    }
                  ]
                }
              ]
            },
            {
              flex: 'xs12',
              text: 'Percentage Site Occupancy (PSO)',
              rule: 'NBCP, Rule VII, Sec 705',
              subitems: [
                {
                  flex: 'xs12',
                  text: 'TGFA - Total Gross Floor Area',
                  textclass: 'ml-2 red--text font-weight-bold'
                },
                {
                  flex: 'xs12',
                  text: 'TLA - Total Lot Area',
                  textclass: 'ml-2 red--text font-weight-bold'
                },
                {
                  flex: 'xs12',
                  text: 'PSO - Percentage Site Occupancy',
                  textclass: 'ml-2 red--text font-weight-bold',
                  rule: 'Percentage Site Occupancy (PSO) based on lot types - Rule 7, Section 705, Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
                },
                {
                  text: 'Institutional GROUP D (Without Sprinkler System & Firewalls)',
                  textclass: 'ml-0',
                  listsa: [{
                    text: 'Interior (or Rear) and End Lot:',
                    value: '50% of TLA'
                  },
                  {
                    text: 'Inside (or Regular) Lot:',
                    value: '50% of TLA'
                  },
                  {
                    text: 'Corner Lot:',
                    value: '60% of TLA'
                  },
                  {
                    text: 'Through Lot:',
                    value: '60% of TLA'
                  },
                  {
                    text: 'Corner Through Lot:',
                    value: '60% of TLA'
                  },
                  {
                    text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                    value: '60% of TLA'
                  }]
                },
                {
                  text: 'Institutional GROUP D (With Sprinkler System & Firewalls)',
                  textclass: 'ml-0',
                  listsa: [{
                    text: 'Interior (or Rear) and End Lot:',
                    value: '60% of TLA'
                  },
                  {
                    text: 'Inside (or Regular) Lot:',
                    value: '60% of TLA'
                  },
                  {
                    text: 'Corner Lot:',
                    value: '70% of TLA'
                  },
                  {
                    text: 'Through Lot:',
                    value: '70% of TLA'
                  },
                  {
                    text: 'Corner Through Lot:',
                    value: '70% of TLA'
                  },
                  {
                    text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                    value: '70% of TLA'
                  }]
                },
                {
                  text: 'Maximum Allowable Percentage Site Occupancy (PSO), Maximum Allowable   ISA, MACA, Minimum USA and TOSL by Type of Land Use Zoning per Lot (Rule VIII, Section 803, Table VIII.1)',
                  textclass: 'ml-0'
                },
                {
                  text: 'Institutional',
                  value: '(Without firewall):',
                  textclass: 'ml-0 font-weight-bold',
                  listsa: [{
                    text: 'Maximum Allowable PSO: 50% of TLA'
                  },
                  {
                    text: 'Maximum Allowable ISA (Paved Open Spaces): 20% of TLA'
                  },
                  {
                    text: 'Maximum USA (Unpaved Open Spaces): 30% of TLA'
                  },
                  {
                    text: 'TOSL (ISA+USA): 50% of TLA'
                  }]
                },
                {
                  text: 'Institutional',
                  value: '(With firewall):',
                  textclass: 'ml-0 font-weight-bold',
                  listsa: [{
                    text: 'Maximum Allowable PSO: 60% of TLA'
                  },
                  {
                    text: 'Maximum Allowable ISA (Paved Open Spaces): 20% of TLA'
                  },
                  {
                    text: 'Maximum USA (Unpaved Open Spaces): 20% of TLA'
                  },
                  {
                    text: 'TOSL (ISA+USA): 40% of TLA'
                  }]
                },
                {
                  rule: 'Total Open Space Requirements on Lots by Use/Occupancy, Type/Location and Suggested Minimum Lot Sizes, Lot Dimensions and Types by Use/Occupancy (Rule VIII, Table VIII.G.6 - Minimum TOSL Requirements by Lot Type/Location)'
                },
                {
                  rule: 'Note: Higher Percentages (%) may apply for lots with Minimum Total Lot Area (TLA)'
                },
                {
                  value: 'Minimum Percentage of Open Space by Occupancy Type** (for proposed development Without firewalls or abutments)'
                },
                {
                  text: 'Interior or Rear Lot - 50%',
                  textclass: 'font-weight-bold',
                  value: '(all classes of institutional uses or occupancy)'
                },
                {
                  text: 'Corner Lot+ or Through Lot - 40%',
                  textclass: 'font-weight-bold',
                  value: '(for all classes of institutional uses or occupancy)'
                },
                {
                  text: 'End Lots',
                  textclass: 'font-weight-bold',
                  value: 'bounded on two (2) or  more sides by the subdivision property line or public open spaces and accessible only through one (1) side of the lot -',
                  boldvalue: '50%',
                  value_a: '(all classes of institutional uses or occupancy)'
                },
                {
                  text: 'Corner-Through Lots or Corner Lots',
                  textclass: 'font-weight-bold',
                  value: '+ abutting three (3) or more public open spaces - ',
                  boldvalue: '40%',
                  value_a: '(all classes of institutional uses or occupancy)'
                },
                {
                  text: 'Minimum Percentage of Open Space by Occupancy Type** (for proposed development With Permitted firewalls or allowed abutments)'
                },
                {
                  text: 'Interior or Rear Lot - 40%',
                  textclass: 'font-weight-bold',
                  value: '**** (for all institutional)'
                },
                {
                  text: 'Corner Lot+ or Through Lot - 30%',
                  textclass: 'font-weight-bold',
                  value: '**** (for all institutional)'
                },
                {
                  text: 'End Lots',
                  textclass: 'font-weight-bold',
                  value: 'bounded on two (2) or  more sides by the subdivision property line or public open spaces and accessible only through one (1) side of the lot -',
                  boldvalue: '40%',
                  value_a: '(for all institutional)'
                },
                {
                  text: 'Corner-Through Lots or Corner Lots',
                  textclass: 'font-weight-bold',
                  value: '+ abutting three (3) or more public open spaces -',
                  boldvalue: '30%',
                  value_a: '(for all institutional)'
                },
                {
                  rule: '++ Refer to Rule VII for occupancy grouping.',
                  rule_desc: '**** with firewall/abutments for all classes of institutional uses.'
                }
              ]
            },
            {
              flex: 'xs12',
              text: 'Building Height Limit (BHL)',
              rule: 'NBCP, Rule VII, Sec 705(2), Table VII.2, Building Height Limit (BHL) by Type or Occupancy',
              subitems: [
                {
                  text: '- 15.00m (or follow the duly approved BHL in the major zone it is part of.'
                }
              ]
            },
            {
              flex: 'xs12',
              text: 'Occupant Load',
              rule: 'Rule XII. Section 1207 Table XII.1',
              listsb: [{
                text: 'Classrooms',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '1.80 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '50'
                }]
              },
              {
                text: 'Conference Rooms, Exhibit Rooms, Gymnasia',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '1.40 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '50'
                }]
              },
              {
                text: 'School Shops, Vocational Institutions, Laboratories',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '4.60 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '50'
                }]
              }],
              listsa: [
                {
                  text: 'General Requirements for Occupant Loads and Exits',
                  rule: 'Rule XII. Section 1207 Table XII.1',
                  listsb: [{
                    text: 'Hospitals**, Sanitaria**',
                    textclass: 'font-weight-bold',
                    listsc: [{
                      text: 'Unit Area per Occupant:',
                      textclass: 'font-weight-bold',
                      value: '8.40 sqm'
                    },
                    {
                      text: 'Min. of 2 exits where no. of occupants is over:',
                      textclass: 'font-weight-bold',
                      value: '5'
                    }]
                  },
                  {
                    text: 'Nursing Homes**',
                    textclass: 'font-weight-bold',
                    listsc: [{
                      text: 'Unit Area per Occupant:',
                      textclass: 'font-weight-bold',
                      value: '7.40 sqm'
                    },
                    {
                      text: 'Min. of 2 exits where no. of occupants is over:',
                      textclass: 'font-weight-bold',
                      value: '5'
                    }]
                  },
                  {
                    text: 'Nursing Homes**, Children’s Homes**, Homes for the Aged**',
                    textclass: 'font-weight-bold',
                    listsc: [{
                      text: 'Unit Area per Occupant:',
                      textclass: 'font-weight-bold',
                      value: '7.40 sqm'
                    },
                    {
                      text: 'Min. of 2 exits where no. of occupants is over:',
                      textclass: 'font-weight-bold',
                      value: '5'
                    }]
                  },
                  {
                    text: 'Nursing Homes**, Children’s Homes**, Homes for the Aged**',
                    textclass: 'font-weight-bold',
                    listsc: [{
                      text: 'Unit Area per Occupant:',
                      textclass: 'font-weight-bold',
                      value: '7.40 sqm'
                    },
                    {
                      text: 'Min. of 2 exits where no. of occupants is over:',
                      textclass: 'font-weight-bold',
                      value: '5',
                      rule: '**Institutional Sleeping Departments shall be based on one (1) occupant per 11.0 sqm of the gross floor area; in-patient Institutional Treatment Departments shall be based on one (1) occupant per 22.0 sqm meters of gross floor area'
                    }]
                  }]
                }
              ]
            }
          ]
        },
        {
          class_id: [13,14,15,16,17],
          text: 'E. BUSINESS AND MERCANTILE',
          rule: 'NBCP Rule VII Sec 701',
          subitems: [
          {
            class_id: [13,14],
            text: 'E-1',
            textclass: 'font-weight-bold',
            rule: 'NBCP Rule VII Sec 701',
            subitems: [
              {
                text: 'Business and mercantile where no work is done except change of parts and maintenance requiring no open flames, welding or use of flammable liquids',
                textclass: 'red--text'
              },
              {
                class_id: [13],
                text: 'C-1',
                textclass: 'font-weight-bold',
                value: '(Light Commercial) - neighborhood or community level commercial; one (1) to three (3) storey high shopping centers, small offices, or mixed-use/occupancy buildings, etc.'
              },
              {
                class_id: [14],
                text: 'UTS',
                textclass: 'font-weight-bold',
                value: '(Utilities, Transportation, and Services) - utilitarian/functional use/occupancy; low-rise to medium-rise or one (1) to three (3) storey building for low to high intensity community support; terminals, inter-modals, multi-modals, depots.',
                list_num: [{
                  value: 'All uses allowed in Division B-1 (or for R-3) buildings/structure'
                },
                {
                  value: 'Gasoline filling and service stations, parking buildings, display for cars, etc.'
                },
                {
                  value: 'Bus and railway depots and terminals and offices'
                },
                {
                  value: 'Port facilities, airport facilities, and other types of transportation complexes'
                },
                {
                  value: 'Stores for construction suppliers and building materials, and other similar products except concrete products'
                }
              ]
            }]
          },
          {
            class_id: [15,16],
            text: 'Division E-2',
            textclass: 'font-weight-bold',
            rule: 'NBCP Rule VII Sec 701',
            subitems: [
              {
              text: 'Business and mercantile in nature',
              textclass: 'red--text'
            },
            {
              class_id: [15],
              text: 'C-2',
              textclass: 'font-weight-bold',
              value: '(Medium Commercial) - municipal or city level commercial; medium rise, or  three (3) to five (5) storey high shopping centers, small offices, or mixed-use/occupancy buildings, etc.'
            },
            {
              class_id: [16],
              text: 'SPE',
              textclass: 'font-weight-bold',
              value: '(Special) - other vertical facilities not mentioned under regular use/occupancy; cemeteries, memorial parks, etc.',
              list_num: [{
                value: 'Wholesale and general retail establishments, malls, supermarkets, wet and dry markets'
              },
              {
                value: 'Restaurants and drinking establishments with less than one hundred (100) occupancies'
              },
              {
                value: 'Factories and workshops using less flammable or non-combustible materials'
              },
              {
                value: 'Funeral parlors, memorial and mortuary chapels, crematories, columbarium'
              },
              {
                value: 'Telecommunications, media and public information complexes'
              }]
            }]
          },
          {
            class_id: [17],
            text: 'Division E-3',
            textclass: 'font-weight-bold',
            subitems: [
              {
                text: 'Aircraft Hangars, open parking carports, garages, etc.',
                textclass: 'red--text'
              },
              {
                text: 'C-3',
                textclass: 'font-weight-bold',
                value: '(Metropolitan Commercial) - metropolitan level commercial; medium to high rise for high to very high intensity commercial/trade/services;  large to very large shopping malls, large office or mixed-use buildings, etc.',
                list_num: [
                  {
                    value: 'All permitted uses in Division E-1 (or C-1 and C-2) buildings/structures'
                  },
                  {
                    value: 'Aircraft hangars'
                  },
                  {
                    value: 'Department stores, shopping malls/centers, commercial and sports complexes/areas'
                  },
                  {
                    value: 'Institutional uses as university complexes'
                  },
                  {
                    value: 'Other commercial/business activities not elsewhere classified'
                  }
                ]
              }
            ]
          }],
          items: [{
            text: 'Setback',
            rule: 'Table VIII.3 Setbacks for Commercial, Industrial, Institutional and Recreational Buildings',
            listsa: [
              {
                text: '30.00m & above (Road Right-of-Way)',
                textclass: 'font-weight-normal',
                subitems: [{
                  value: '- 8.00m (front), 5.00m (side), 5.00m (rear)'
                }]
              },
              {
                text: '25.00m to 29.00m (Road Right-of-Way)',
                textclass: 'font-weight-normal',
                subitems: [{
                  value: '- 6.00m (front), 3.00m (side), 3.00m (rear)'
                }]
              },
              {
                text: '20.00m to 24.00m (Road Right-of-Way)',
                textclass: 'font-weight-normal',
                subitems: [{
                  value: '- 5.00m (front), 3.00m (side), 3.00m (rear)'
                }]
              },
              {
                text: '10.00m to 19.00m (Road Right-of-Way)',
                textclass: 'font-weight-normal',
                subitems: [{
                  value: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                }]
              },
              {
                text: 'Below 10.00m (Road Right-of-Way)',
                textclass: 'font-weight-normal',
                subitems: [{
                  value: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                }]
              }
            ]
          },
          {
            text: 'Firewall',
            rule: 'NBCP Rule VII, Section 704 (C)(iv)',
            listsa: [
              {
                flex: 'xs12',
                text: 'Maximum Length:',
                value: 'up to 70% of the property line'
              },
              {
                flex: 'xs12',
                text: 'Conditions:',
                listsb: [{
                  text: 'Provision of fully functional sprinkler system'
                },
                {
                  text: 'Installation of other fire-retardant or fire suppression devices'
                },
                {
                  text: 'Prescribed setbacks, yards, and courts fronting the RROW are fully complied'
                },
                {
                  text: 'All applicable stipulations of the Fire Code (RA 9514) are strictly followed:',
                  listsc: [{
                    text: 'Number, type, location of fire exits'
                  }]
                }]
              }
            ]
          },
          {
            text: 'Parking',
            rule: 'Table VII.4 Minimum Required Off-Street (Off-RROW) cum On-Site Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use/Occupancy',
            subitems: [
              {
                class_id: [14],
                text: 'Division E-1',
                textclass: 'font-weight-bold',
                lists: [
                  {
                    text: ' UTS - Terminals, intermodals, multimodals, depots, etc.',
                    textclass: 'font-weight-normal',
                    listsa: [
                      {
                        value: '1 car slot for every five hundred (500) sqm gross floor area'
                      },
                      {
                        value: '1 off-RROW loading space good for two (2) jeepneys/shuttles or two (2) buses, whichever is applicable (maneuvering space must be within the property line)'
                      }
                    ]
                  },
                  {
                    text: ' UTS - Transit Stations, etc',
                    textclass: 'font-weight-normal',
                    listsa: [
                      {
                        value: '1 off-RROW loading space good for four (4) jeepneys/shuttles or three (3) buses, whichever is applicable (maneuvering space must be within the property line) on each side of the RROW'
                      }
                    ]
                  }
                ]
              },
              {
                class_id: [13,15,16],
                text: 'Division E-2',
                textclass: 'font-weight-bold',
                lists: [
                  {
                    text: 'C-1 - Neighborhood shopping center/supermarket',
                    textclass: 'font-weight-normal',
                    listsa: [
                      {
                        value: '1 car slot every one hundred (100) sqm shopping floor area'
                      }
                    ]
                  },
                  {
                    text: 'C - Public Market',
                    textclass: 'font-weight-normal',
                    listsa: [
                      {
                        value: '1 customer jeepney/shuttle parking slot for every one hundred fifty (150) sqm of wet and dry market floor area'
                      },
                      {
                        value: '1 vendor jeepney/shuttle parking slot/ loading space for every three hundred (300) sqm of wet and dry market floor area'
                      },
                      {
                        value: '1 off-RROW terminal good for at least two (2) jeepneys and six (6) tricycles for every one thousand (1000) sqm of wet and dry market floor area'
                      }
                    ]
                  },
                  {
                    text: 'C - Restaurants, fast-food centers, bars, beerhouses, etc',
                    textclass: 'font-weight-normal',
                    listsa: [
                      {
                        value: '1 car slot for every thirty (30) sqm of customer area'
                      }
                    ]
                  },
                  {
                    text: 'C - Nightclubs, superclubs, theater-restaurants',
                    textclass: 'font-weight-normal',
                    listsa: [
                      {
                        value: '1 car slot for every twenty (20) sqm of customer area'
                      },
                      {
                        value: '2 tourist parking slots for tourist bus parking for each theater-restaurant'
                      },
                      {
                        value: '1 car slot for every thirty (30) sqm of customer area'
                      }
                    ]
                  },
                  {
                    text: 'Units in commercial, mixed use condominium buildings (regardless of the number of storeys)',
                    textclass: 'font-weight-normal',
                    listsa: [
                      {
                        text: 'Units with 18-40 sqm gross floor area:',
                        value: '1 car slot for every two (2) units'
                      },
                      {
                        text: 'Units with 41-70 sqm gross floor area:',
                        value: '1 car slot for every unit'
                      },
                      {
                        text: 'Units with 70 sqm gross floor area or more:',
                        value: '1 car slot for every unit'
                      }
                    ]
                  },
                  {
                    class_id: [15,16],
                    text: 'Columbarium',
                    listsa: [
                      {
                        text: '1 car slot for every compartment niche'
                      }
                    ]
                  }
                ]
              },
              {
                class_id: [17],
                text: 'Division E-3',
                textclass: 'font-weight-bold',
                lists: [
                  {
                    text: 'Aircraft Hangars, open parking carports, garages, etc.',
                    textclass: 'font-weight-normal',
                    listsa: [
                      {
                        value: '1 car slot every one thousand (1000) sqm gross floor area'
                      },
                      {
                        value: '1 bus slot for every one hundred (100) workers'
                      },
                      {
                        value: '1 off-RROW passenger loading space good for two (2) jeepneys/shuttles if number of workers exceed two hundred (200)'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Percentage Site Occupancy (PSO)',
            rule: 'Percentage Site Occupancy based on lot types - Figures VIII.1 - VIII.11',
            rule_desc: 'Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
            subitems: [
              {
                text: 'Commercial (Com-1, Com-2, Com-3)',
                listsa: [
                  {
                    text: 'Interior (or Rear) and End Lot:',
                    value: '80% of TLA'
                  },
                  {
                    text: 'Inside (or Regular) Lot:',
                    value: '75% of TLA'
                  },
                  {
                    text: 'Corner Lot:',
                    value: '80% of TLA'
                  },
                  {
                    text: 'Through Lot:',
                    value: '80% of TLA'
                  },
                  {
                    text: 'Corner Through Lot:',
                    value: '90% of TLA'
                  },
                  {
                    text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                    value: '90% of TLA'
                  }
                ]
              },
              {
                text: 'Commercial (Com-1, Com-2, Com-3) with sprinkler system & firewalls',
                listsa: [
                  {
                    text: 'Interior (or Rear) and End Lot:',
                    value: '85% of TLA'
                  },
                  {
                    text: 'Inside (or Regular) Lot:',
                    value: '85% of TLA'
                  },
                  {
                    text: 'Corner Lot:',
                    value: '90% of TLA'
                  },
                  {
                    text: 'Through Lot:',
                    value: '90% of TLA'
                  },
                  {
                    text: 'Corner Through Lot:',
                    value: '95% of TLA'
                  },
                  {
                    text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                    value: '95% of TLA'
                  }
                ]
              },
              {
                class_id: [14],
                text: 'Transportation (without sprinkler system & firewalls)',
                listsa: [
                  {
                    text: 'Interior (or Rear) and End Lot:',
                    value: '50% of TLA'
                  },
                  {
                    text: 'Inside (or Regular) Lot:',
                    value: '50% of TLA'
                  },
                  {
                    text: 'Corner Lot:',
                    value: '60% of TLA'
                  },
                  {
                    text: 'Through Lot:',
                    value: '60% of TLA'
                  },
                  {
                    text: 'Corner Through Lot:',
                    value: '60% of TLA'
                  },
                  {
                    text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                    value: '60% of TLA'
                  }
                ]
              },
              {
                class_id: [14],
                text: 'Transportation (with sprinkler system & firewalls)',
                listsa: [
                  {
                    text: 'Interior (or Rear) and End Lot:',
                    value: '60% of TLA'
                  },
                  {
                    text: 'Inside (or Regular) Lot:',
                    value: '60% of TLA'
                  },
                  {
                    text: 'Corner Lot:',
                    value: '70% of TLA'
                  },
                  {
                    text: 'Through Lot:',
                    value: '70% of TLA'
                  },
                  {
                    text: 'Corner Through Lot:',
                    value: '70% of TLA'
                  },
                  {
                    text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                    value: '70% of TLA'
                  }
                ]
              },
              {
                class_id: [13,14,15, 17],
                rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
                listsa: [
                  {
                    class_id: [13, 14],
                    text: 'Com-1:',
                    value: '70% of TLA (without firewall), 80% of TLA (with firewall)'
                  },
                  {
                    class_id: [15, 14],
                    text: 'Com-2:',
                    value: '75% of TLA (without firewall), 85% of TLA (with firewall)'
                  },
                  {
                    class_id: [17, 14],
                    text: 'Com-3:',
                    value: '80% of TLA (without firewall), 90% of TLA (with firewall)'
                  },
                  {
                    class_id: [14],
                    text: 'UTS:',
                    value: '50% of TLA (without firewall), 60% of TLA (with firewall)'
                  }
                ]
              }
            ]
          },
          {
            text: 'Building Height Limit (BHL)',
            rule: 'Table VII.2 Building Height Limit (BHL) by Type of Use or Occupancy',
            subitems: [
              {
                class_id: [13],
                text: 'Commercial 1 (Com-1)',
                listsa: [
                  {
                    text: 'No. of Floors:',
                    value: 'three to five (3-5) storeys'
                  },
                  {
                    text: 'Height in meters:',
                    value: '10-15 m'
                  }
                ]
              },
              {
                class_id: [15],
                text: 'Commercial 2 (Com-2)',
                listsa: [
                  {
                    text: 'No. of Floors:',
                    value: 'six (6) storeys'
                  },
                  {
                    text: 'Height in meters:',
                    value: '18 m'
                  }
                ]
              },
              {
                class_id: [17],
                text: 'Commercial 3 (Com-3)',
                listsa: [
                  {
                    text: 'No. of Floors:',
                    value: 'sixteen to sixty (16-60) storeys'
                  },
                  {
                    text: 'Height in meters:',
                    value: '48-180 m'
                  }
                ]
              },
              {
                class_id: [14],
                text: 'Utility/Transportation/RROW/Services',
                listsa: [
                  {
                    text: 'Height in meters:',
                    value: '15.0m (must complement the duly-approved BHL in the major zone it is part of)'
                  }
                ]
              }
            ]
          },
          {
            text: 'Occupant Load',
            rule: 'Rule XII. Section 1207 Table XII.1',
            subitems:[{
              flex: 'xs12',
              text: 'Stores: Retail Sales Rooms:',
              textclass: 'font-weight-bold',
              rule: 'Rule XII. Section 1207 Table XII.1 (continued)',
              listsb: [{
                text: 'Basement, Ground Floor',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '2.80 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '50'
                }]
              },
              {
                text: 'Upper Floors',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '5.60 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '10'
                }]
              },
              {
                text: 'Offices',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '9.30 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '30'
                }
                ]
              },
              {
                text: 'Aircraft Hangars (no repair)',
                listsc: [
                  {
                    text: 'Unit Area per Occupant:',
                    value: '46.50 sqm'
                  },
                  {
                    text: 'Min. of 2 exits where no. of occupants is over:',
                    value: '10'
                  }
                ]
              },
              {
                text: 'Parking Garages',
                listsc: [
                  {
                    text: 'Unit Area per Occupant:',
                    value: '18.60 sqm'
                  },
                  {
                    text: 'Min. of 2 exits where no. of occupants is over:',
                    value: '30'
                  }
                ]
              },
              {
                text: 'Drinking Establishments',
                listsc: [
                  {
                    text: 'Unit Area per Occupant:',
                    value: '1.40 sqm'
                  },
                  {
                    text: 'Min. of 2 exits where no. of occupants is over:',
                    value: '30'
                  }
                ]
              },
              {
                text: 'Kitchens (Commercial)',
                listsc: [
                  {
                    text: 'Unit Area per Occupant:',
                    value: '18.60 sqm'
                  },
                  {
                    text: 'Min. of 2 exits where no. of occupants is over:',
                    value: '50'
                  }
                ]
              }]
            }]
          }]
        },
        {
          class_id: [18],
          text: 'F. Industrial (Non-pollutive/Non-Hazardous Industries and Non-pollutive Hazardous Industries)',
          rule: 'NBCP Rule VII Sec 701',
          subitems: [
            {
              text: 'Plants, factories and workshops using incombustible and non-explosive materials, storage and sales rooms for incombustible and non-explosive materials',
              textclass: 'red--text'
            },
            {
              text: 'Division F-1',
              textclass: 'font-weight-bold',
              value: 'Light Industrial'
            },
            {
              text: 'I-1',
              value: '(Industrial One) - light industrial use or occupancy; low to medium rise but sprawling building/structure for low intensity manufacturing or production activities',
              list_num: [
                {
                  value: 'Ice plants and cold storage buildings, breweries, bottling plants, canneries, and tanneries'
                },
                {
                  value: 'Powerplants (thermal, hydro or geothermal)'
                },
                {
                  value: 'Pumping plants (water supply, storm drainage, sewerage, irrigation and wate treatment plants)'
                },
                {
                  value: 'Dairies and creameries, rice mills and sugar centrals'
                },
                {
                  value: 'Factories and workshops using incombustible or non-explosive materials'
                }
              ]
            }
          ],
          items: [
            {
              text: 'Setback',
              rule: 'Table VIII.3 Setbacks for Commercial, Industrial, Institutional and Recreational Buildings',
              listsa: [
                {
                  text: '30.00m & above (Road Right-of-Way)',
                  textclass: 'font-weight-normal',
                  subitems: [{
                    value: '- 8.00m (front), 5.00m (side), 5.00m (rear)'
                  }]
                },
                {
                  text: '25.00m to 29.00m (Road Right-of-Way)',
                  textclass: 'font-weight-normal',
                  subitems: [{
                    value: '- 6.00m (front), 3.00m (side), 3.00m (rear)'
                  }]
                },
                {
                  text: '20.00m to 24.00 (Road Right-of-Way)',
                  textclass: 'font-weight-normal',
                  subitems: [{
                    value: '- 5.00m (front), 3.00m (side), 3.00m (rear)'
                  }]
                },
                {
                  text: '10.00m to 19.00 (Road Right-of-Way)',
                  textclass: 'font-weight-normal',
                  subitems: [{
                    value: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                  }]
                },
                {
                  text: 'Below 10.00m (Road Right-of-Way)',
                  textclass: 'font-weight-normal',
                  subitems: [{
                    value: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                  }]
                }
              ]
            },
            {
              text: 'Firewall',
              rule: 'NBCP Rule VII, Section 704 (C)(iv)',
              listsa: [
                {
                  flex: 'xs12',
                  text: 'Maximum Length:',
                  value: 'up to 70% of the property line'
                },
                {
                  flex: 'xs12',
                  text: 'Conditions:',
                  listsb: [
                    {
                      text: 'Provision of fully functional sprinkler system'
                    },
                    {
                      text: 'Installation of other fire-retardant or fire suppression devices'
                    },
                    {
                      text: 'Prescribed setbacks, yards, and courts fronting the RROW are fully complied'
                    },
                    {
                      text: 'All applicable stipulations of the Fire Code (RA 9514) are strictly followed:',
                      listsc: [
                      {
                        text: 'Number, type, location of fire exits'
                      }]
                    }
                  ]
                }
              ]
            },
            {
              text: 'Parking',
              rule: 'Table VII.4 Minimum Required Off-Street (Off-RROW) cum On-Site Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use/Occupancy',
              subitems: [
                {
                  text: 'Division F-1',
                  textclass: 'font-weight-bold',
                  lists: [{
                    value: 'industrial buildings, mills, breweries, etc.'
                  }],
                  listsa: [{
                    value: '1 car slot for every one thousand (1000) sqm of gross floor area'
                  },
                  {
                    value: '1 bus slot for every one hundred (100) workers'
                  },
                  {
                    value: '1 off-RROW passenger loading space good for two (2) queued jeepney/shuttle slots if number of workers exceed two hundred (200)'
                  },
                  {
                    value: '1 loading slot for truck or vehicle; twelve (12) meter long container van + six (6) meter long/hooded prime mover'
                  },
                  {
                    value: '1 loading slot for standard truck for every five thousand (5000) sqm of GFA'
                  },
                  {
                    value: 'Provide truck maneuvering area within property or lot line'
                  }]
                }
              ]
            },
            {
              text: 'Building Height Limit (BHL)',
              rule: 'Table VII.2 Building Height Limit (BHL) by Type of Use or Occupancy',
              subitems: [
                {
                  text: 'Industrial 1 (Ind-1)',
                  listsa: [{
                    text: 'Maximum Height in meters:',
                    value: '15m or the duly approved BHL in the major zone it is part of'
                  }]
                }
              ]
            },
            {
              flex: 'xs12',
              text: 'Percentage Site Occupancy (PSO)',
              rule: 'Percentage Site Occupancy based on lot types - Figures VIII.1 - VIII.11',
              rule_desc: 'Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
              subitems: [
                {
                  text: 'Industrial 1 (Ind-1)',
                  lists: [{
                    text: 'industrial buildings, mills, breweries, etc.'
                  }],
                  listsa: [{
                    text: 'Interior (or Rear) and End Lot:',
                    value: '80% of TLA'
                  },
                  {
                    text: 'Inside (or Regular) Lot:',
                    value: '75% of TLA'
                  },
                  {
                    text: 'Corner Lot:',
                    value: '80% of TLA'
                  },
                  {
                    text: 'Through Lot:',
                    value: '80% of TLA'
                  },
                  {
                    text: 'Corner Through Lot:',
                    value: '90% of TLA'
                  },
                  {
                    text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                    value: '90% of TLA',
                    rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)'
                  },
                  {
                    text: 'Com-1:',
                    value: '70% of TLA (without firewall), 80% of TLA (with firewall)'
                  },
                  {
                    text: 'Com-2:',
                    value: '75% of TLA (without firewall), 85% of TLA (with firewall)'
                  },
                  {
                    text: 'Com-3:',
                    value: '80% of TLA (without firewall), 90% of TLA (with firewall)',
                    rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)'
                  },
                  {
                    text: 'Ind-1, Ind-2, Ind-3:',
                    value: '70% of TLA (without firewall), 80% of TLA (with firewall)'
                  }]
                },
                {
                  text: 'Industrial 1 (Ind-1) GROUP G',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '75% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '90% of TLA'
                    }
                  ]
                },
                {
                  text: 'Industrial 1 (Ind-1)  with Sprinkler System & Firewalls',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '85% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '85% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '95% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '95% of TLA'
                    }
                  ]
                },
                {
                  text: 'Industrial 1 (Ind-1)',
                  value: '(Without firewall)',
                  listsa: [
                    {
                      text: 'Maximum Allowable PSO: 70% of TLA'
                    },
                    {
                      text: 'Maximum Allowable ISA (Paved Open Spaces): 20% of TLA'
                    },
                    {
                      text: 'Maximum USA (Unpaved Open Spaces): 10% of TLA'
                    },
                    {
                      text: 'TOSL (ISA+USA): 30% of TLA'
                    }
                  ]
                },
                {
                  text: 'Industrial 1 (Ind-1)',
                  value: '(With firewall)',
                  listsa: [
                    {
                      text: 'Maximum Allowable PSO: 80% of TLA'
                    },
                    {
                      text: 'Maximum Allowable ISA (Paved Open Spaces): 10% of TLA'
                    },
                    {
                      text: 'Maximum USA (Unpaved Open Spaces): 10% of TLA'
                    },
                    {
                      text: 'TOSL (ISA+USA): 20% of TLA'
                    }
                  ]
                },
              ]
            },
            {
              text: 'Occupant Load',
              rule: 'Rule XII. Section 1207 Table XII.1',
              listsb: [{
                text: 'Warehouses & Mechanical Equipment Rooms',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '28.0 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '30'
                }]
              },
              {
                text: 'Garages',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '9.30 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '10'
                }]
              }]
            }
          ]
        },
        {
          class_id: [19,20,21,22,23,24],
          text: 'G. STORAGE and HAZARDOUS INDUSTRIAL (POLLUTIVE/NON-HAZARDOUS INDUSTRIES and POLLUTIVE/HAZARDOUS INDUSTRIES)',
          rule: 'RULE VII, SECTION 701, TABLE 1',
          subitems:[
            {
              class_id: [19, 20],
              text: 'Division G-1',
              textclass: 'font-weight-bold',
              value: '(Medium Industrial, which shall include storage and handling of hazardous and highly flammable materials)',
              subitems: [
                {
                  text: 'I-2',
                  textclass: 'font-weight-bold',
                  value: '(Industrial Two) - medium industrial use or occupancy, low rise but sprawling building for medium intensity manufacturing or production activities.',
                  list_num: [
                    {
                      value: 'Processing plants'
                    },
                    {
                      value: 'Factories for highly flammable chemicals'
                    },
                    {
                      value: 'Water and power generation/distribution complexes'
                    },
                    {
                      value: 'Liquid and solid waste management facilities'
                    },
                    {
                      value: 'All other types of large complexes for public utilities'
                    }
                  ]
                }
              ]
            },
            {
              class_id: [21],
              text: 'Division G-2',
              textclass: 'font-weight-bold',
              value: '(Medium industrial buildings for storage and handling of flammable materials)',
              list_num: [
                {
                  value: 'All uses permitted in I-1 class'
                },
                {
                  value: 'Dry cleaning plants using flammable liquids'
                },
                {
                  value: 'Plant stores with bulk handling'
                },
                {
                  value: 'Plant shops and spray painting rooms'
                },
                {
                  value: 'Sign and billboard planting shops'
                }
              ]
            },
            {
              class_id: [22],
              text: 'Division G-3',
              textclass: 'font-weight-bold',
              value: '(Medium industrial buildings for wood working activities, papers cardboard manufacturers, textile and garment factories)',
              list_num: [
                {
                  value: 'Wood working establishments, lumber and timber yards'
                },
                {
                  value: 'Pulp, paper and paperboard factories'
                },
                {
                  value: 'Grains and cement silos'
                },
                {
                  value: 'Warehouse where highly combustible materials are stored'
                },
                {
                  value: 'Factories, where loose combustible fiber or dirt are manufactured, processed or generated'
                }
              ]
            },
            {
              class_id: [23],
              text: 'Division G-4',
              textclass: 'font-weight-bold',
              value: '(Medium industrial, for repair garages and engine manufacturer)',
              list_num: [
                {
                  value: 'Repair garages and shops'
                },
                {
                  value: 'Factories for engines and turbines and attached testing facilities'
                }
              ]
            },
            {
              class_id: [24],
              text: 'Division G-5',
              value: '(Medium industrial, for repair garages and engine manufacturer)',
              list_num: [
                {
                  value: 'Hangars'
                },
                {
                  value: 'Manufacture and assembly plants of aircraft engine'
                },
                {
                  value: 'Repairs and testing shops for aircraft engines and plants'
                }
              ]
            }
          ],
          items: [
            {
              text: 'Setback',
              rule: 'NBCP, Rule VIII, Table VIII.3, Setbacks for Commercial*, Industrial, Institutional and Recreational Buildings',
              listsa: [
                {
                  value: '30.00m & above (Road Right-of-Way)',
                  subitems: [{
                    value: '- 8.00m (front), 5.00m (side), 5.00m (rear)'
                  }]
                },
                {
                  value: '25.00m to 29.00m (Road Right-of-Way)',
                  subitems: [{
                    value: '- 6.00m (front), 3.00m (side), 3.00m (rear)'
                  }]
                },
                {
                  value: '20.00m to 24.00 (Road Right-of-Way)',
                  subitems: [{
                    value: '- 5.00m (front), 3.00m (side), 3.00m (rear)'
                  }]
                },
                {
                  value: '10.00m to 19.00 (Road Right-of-Way)',
                  subitems: [{
                    value: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                  }]
                },
                {
                  value: 'Below 10.00m (Road Right-of-Way)',
                  subitems: [{
                    value: '- 5.00m (front), 2.00m (side), 2.00m (rear)',
                    rule: '* Mixed -Used Buildings/Structures in R-5 lots may be considered a commercial development if a substantial percentage of the GFA is commercial.'
                  }]
                }
              ]
            },
            {
              text: 'Firewall',
              rule: 'NBCP, Rule VII, Section 704 (C)(iv)',
              subitems: [{
                text: 'Industrial (with sprinkler system, other fire retardant or fire suppression devices)',
                listsa: [
                  {
                    text: 'up to 70%',
                    value: 'of the total perimeter of the property lines, if:'
                  }
                  ],
                subitems: [
                  {
                    text: '-  with proper setbacks, yards and courts fronting the Road Right-of-Way'
                  },
                  {
                    text: '-  number, type and locations of fire exits under the Fire Code are strictly followed.'
                  }
                ]
              }]
            },
            {
              text: 'Parking',
              rule: 'Minimum Required Off-Street (Off-RROW) cum On-SIte Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use or Occupancy (Rule VII, Section 707, Table VII.4)',
              subitems: [
                {
                  text: 'Division G-1, G-2, G-3, G-4, G-5 - Industrial buildings, factories, manufacturing establishments, mercantile buildings, warehouses, storage bins, power and water generations/distribution facilities',
                  textclass: 'font-weight-bold',
                  listsa: [
                    {
                      value: '1 car slot - for every 1,000 sq.m. of gross floor area',
                      subitems: [
                        {
                          value: '- Perpendicular parking: 2.50m by 5.00m',
                          valueclass: 'ml-4 my-0 py-0'
                        },
                        {
                          value: '- Parallel parking: 2:15m by 6.00m',
                          valueclass: 'ml-4 my-0 py-0'
                        }
                      ]
                    },
                    {
                      value: '1 bus slot - for every 100 workers',
                      subitems: [
                        {
                          value: '-Standard truck or bus parking: 3.60m by 12.00m',
                          valueclass: 'ml-4 my-0 py-0'
                        }
                      ]
                    },
                    {
                      value: '1 off-RROW (or off-street) passenger loading space that can accommodate 2 queued jeepney/shuttle slots - if number of workers exceed 200',
                      subitems: [
                        {
                          value: '- Jeepney or Shuttle parking/loading: 3.00m by 9.00m',
                          valueclass: 'ml-4 my-0 py-0'
                        }
                      ]
                    },
                    {
                      value: '1 loading slot - for articulated truck or vehicle',
                      subitems: [
                        {
                          value: '3.60m by 12.00m (sufficient to accommodate a 12.00m container van or bulk carrier and long/hooded prime mover)',
                          valueclass: 'ml-4 my-0 py-0'
                        }
                      ]
                    }
                  ]
                },
                {
                  text: 'Allowed Off-RROW/Off-Street cum Off-Site Parking Provision',
                  textclass: 'font-weight-bold',
                  rule: 'Rule VII, Section 707(4)(e)(iv)',
                  subitems: [
                    {
                      text: 'General Institution (GI) uses or occupancies',
                      listsa: [
                        {
                          value: 'front yards abutting RROW are not to be used for long-term off-street parking.'
                        },
                        {
                          value: 'front yard shall be used exclusively for driveways, off-RROW loading spaces, short-term off-RROW parking and landscaping treatment.'
                        },
                        {
                          value: 'temporary or short-term off-street parking (driveways), preferably for visitors to the buildings/structures.'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              text: 'Building Height Limit (BHL)',
              rule: 'NBCP, Rule VII, Sec 705(2), Table VII.2, Building Height Limit (BHL) by Type or Occupancy',
              subitems: [
                {
                  flex: 'xs12',
                  text: 'Industrial 1',
                  value: '(I-1) - 15.00m',
                  valueclass: 'font-weight-bold',
                  value_a: 'but not to exceed the duly-approved BHL in the major zone it is part of.'
                },
                {
                  flex: 'xs12',
                  text: 'Industrial 2',
                  value: '(I-2) - 21.00m',
                  valueclass: 'font-weight-bold',
                  value_a: 'but not to exceed the duly-approved BHL in the major zone it is part of.'
                },
                {
                  flex: 'xs12',
                  text: 'Industrial 3',
                  value: '(I-3) - 27.00m',
                  valueclass: 'font-weight-bold',
                  value_a: 'but not to exceed the duly-approved BHL in the major zone it is part of.'
                }
              ]
            },
            {
              flex: 'xs12',
              text: 'Percentage Site Occupancy (PSO)',
              rule: 'Percentage Site Occupancy based on lot types - Figures VIII.1 - VIII.11',
              rule_desc: 'Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
              subitems: [
                {

                  text: 'Industrial 2 (Ind-2)',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '75% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '90% of TLA'
                    }
                  ]
                },
                {
                  text: 'Industrial 2 (Ind-2) with Sprinkler System & Firewalls',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '85% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '85% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '95% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '95% of TLA'
                    }
                  ]
                },
                {
                  text: 'Industrial 3 (Ind-3)',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '75% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '90% of TLA'
                    }
                  ]
                },
                {
                  text: 'Industrial 3 (Ind-3) with Sprinkler System & Firewalls',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '85% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '85% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '95% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '95% of TLA',
                      rule: 'Maximum Allowable Percentage Site Occupancy (PSO), Maximum Allowable   ISA, MACA, Minimum USA and TOSL by Type of Land Use Zoning per Lot (Rule VIII, Section 803, Table VIII.1)'
                    }
                  ]
                },
                {
                  text: 'Industrial 2 (Ind-2)',
                  value: '(Without firewall)',
                  listsa: [
                    {
                      text: 'Maximum Allowable PSO: 70% of TLA'
                    },
                    {
                      text: 'Maximum Allowable ISA (Paved Open Spaces): 15% of TLA'
                    },
                    {
                      text: 'Maximum USA (Unpaved Open Spaces): 15% of TLA'
                    },
                    {
                      text: 'TOSL (ISA+USA): 30% of TLA'
                    }
                  ]
                },
                {
                  text: 'Industrial 2 (Ind-2)',
                  value: '(With firewall)',
                  listsa: [
                    {
                      text: 'Maximum Allowable PSO: 80% of TLA'
                    },
                    {
                      text: 'Maximum Allowable ISA (Paved Open Spaces): 5% of TLA'
                    },
                    {
                      text: 'Maximum USA (Unpaved Open Spaces): 15% of TLA'
                    },
                    {
                      text: 'TOSL (ISA+USA): 20% of TLA'
                    }
                  ]
                },
                {
                  text: 'Industrial 3 (Ind-3)',
                  value: '(Without firewall)',
                  listsa: [
                    {
                      text: 'Maximum Allowable PSO: 70% of TLA'
                    },
                    {
                      text: 'Maximum Allowable ISA (Paved Open Spaces): 15% of TLA'
                    },
                    {
                      text: 'Maximum USA (Unpaved Open Spaces): 15% of TLA'
                    },
                    {
                      text: 'TOSL (ISA+USA): 30% of TLA'
                    }
                  ]
                },
                {
                  text: 'Industrial 3 (Ind-3)',
                  value: '(With firewall)',
                  listsa: [
                    {
                      text: 'Maximum Allowable PSO: 80% of TLA'
                    },
                    {
                      text: 'Maximum Allowable ISA (Paved Open Spaces): 5% of TLA'
                    },
                    {
                      text: 'Maximum USA (Unpaved Open Spaces): 15% of TLA'
                    },
                    {
                      text: 'TOSL (ISA+USA): 20% of TLA'
                    }
                  ]
                }
              ]
            },
            {
              flex: 'xs12',
              text: 'Occupant Load',
              rule: 'Rule XII. Section 1207 Table XII.1',
              listsb: [{
                text: 'Warehouses & Mechanical Equipment Rooms',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '28.0 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '30'
                }]
              },
              {
                text: 'Garages',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '9.30 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '10'
                }]
              }]
            }
          ]
        },
        {
          class_id: [25,26,27,28,29],
          text: 'H. ASSEMBLY FOR LESS THAN 1000 (Cultural and/or Recreational)',
          rule: 'NBCP Rule VII Sec 701',
          subitems: [
            {
              class_id: [25, 26],
              text: 'Division H-1',
              textclass: 'font-weight-bold',
              value: '(Assembly buildings with stage; occupant load of less than one thousand (1000))',
              subitems: [
                {
                  class_id: [25],
                  text: 'PRE',
                  textclass: 'font-weight-bold',
                  value: '(Park Structures, Recreation and Entertainment) - low-rise or medium-rise building/structure; low to medium intensity recreational or entertainment functions'
                },
                {
                  class_id: [26],
                  text: 'CUL',
                  textclass: 'font-weight-bold',
                  value: '(Cultural) - community to national level cultural use/occupancy; low to medium rise building/structure for cultural activities',
                  list_num: [
                    {
                      value: 'Theaters and auditoriums'
                    },
                    {
                      value: 'Concert halls and open houses'
                    },
                    {
                      value: 'Convention halls'
                    },
                    {
                      value: 'Little theaters, audio visual rooms'
                    }
                  ]
                }
              ]
            },
            {
              class_id: [27],
              text: 'Division H-2',
              textclass: 'font-weight-bold',
              value: '(Assembly buildings with stage; occupant load of 300 or more)',
              list_num: [
                {
                  value: 'Dance halls, cabarets, ballrooms'
                },
                {
                  value: 'Skating rinks'
                },
                {
                  value: 'Cockfighting arenas'
                }
              ]
            },
            {
              class_id: [28],
              text: 'Division H-3',
              textclass: 'font-weight-bold',
              value: '(Assembly buildings with stage; occupant load of less than 300)',
              list_num: [
                {
                  value: 'Dance halls, ballrooms'
                },
                {
                  value: 'Skating rinks'
                }
              ]
            },
            {
              class_id: [29],
              text: 'Division H-4',
              textclass: 'font-weight-bold',
              value: '(Recreational, tourism estate developments, tourism-oriented establishments, structures not included in Divisions H-1)',
              list_num: [
                {
                  value: 'Sports and reviewing stands'
                },
                {
                  value: 'Grandstand and bleachers'
                },
                {
                  value: 'Covered amusement parks'
                },
                {
                  value: 'All types of resort complexes'
                },
                {
                  value: 'All other types of amusement and entertainment complexes'
                }
              ]
            }
          ],
          items: [
            {
              text: 'Setback',
              rule: 'Table VIII.3 Setbacks for Commercial, Industrial, Institutional and Recreational Buildings',
              listsa: [
                {
                  value: '30.00m & above (Road Right-of-Way)',
                  subitems: [
                    {
                      text: '- 8.00m (front), 5.00m (side), 5.00m (rear)'
                    }
                  ]
                },
                {
                  value: '25.00m to 29.00m (Road Right-of-Way)',
                  subitems: [
                    {
                      text: '- 6.00m (front), 3.00m (side), 3.00m (rear)'
                    }
                  ]
                },
                {
                  value: '20.00m to 24.00 (Road Right-of-Way)',
                  subitems: [
                    {
                      text: '- 5.00m (front), 3.00m (side), 3.00m (rear)'
                    }
                  ]
                },
                {
                  value: '10.00m to 19.00 (Road Right-of-Way)',
                  subitems: [
                    {
                      text: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                    }
                  ]
                },
                {
                  value: 'Below 10.00m (Road Right-of-Way)',
                  subitems: [
                    {
                      text: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Firewall',
              rule: 'NBCP Rule VII, Section 704 (C)(iv)',
              listsa: [
                {
                  flex: 'xs12',
                  text: 'Maximum Length:',
                  value: 'up to 70% of the property line'
                },
                {
                  flex: 'xs12',
                  text: 'Conditions:',
                  listsb: [{
                    text: 'Provision of fully functional sprinkler system'
                  },
                  {
                    text: 'Installation of other fire-retardant or fire suppression devices'
                  },
                  {
                    text: 'Prescribed setbacks, yards, and courts fronting the RROW are fully complied'
                  },
                  {
                    text: 'All applicable stipulations of the Fire Code (RA 9514) are strictly followed:',
                    listsc: [{
                      text: 'Number, type, location of fire exits'
                    }]
                  }]
                }
              ]
            },
            {
              text: 'Parking',
              rule: 'Table VII.4 Minimum Required Off-Street (Off-RROW) cum On-Site Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use/Occupancy',
              subitems: [
                {
                  class_id: [25,26],
                  text: 'Division H-1',
                  textclass: 'font-weight-bold',
                  subitems: [
                    {
                      value: '- Public recreational assembly buildings (stadia, sports complexes, convention centers, etc)',
                      listsa: [
                        {
                          value: '1 car slot and 1 jeepney/shuttle slot for every fifty (50) sqm of spectator area'
                        },
                        {
                          value: '1 bus parking slot for every two hundred (200) spectators'
                        }
                      ]
                    }
                  ]
                },
                {
                  class_id: [27],
                  text: 'Division H-2',
                  textclass: 'font-weight-bold',
                  subitems: [
                    {
                      value: '- Dance halls, ballrooms, skating rinks, cockfighiting arenas, etc.',
                      listsa: [
                        {
                          value: '1 car slot and 1 jeepney/shuttle slot for every fifty (50) sqm of spectator area'
                        },
                        {
                          value: '1 bus parking slot for every two hundred (200) spectators'
                        }
                      ]
                    }
                  ]
                },
                {
                  class_id: [28],
                  text: 'Division H-3',
                  textclass: 'font-weight-bold',
                  subitems: [
                    {
                      value: '- Dance halls, ballrooms, skating rinks, etc.',
                      listsa: [
                        {
                          value: '1 car slot and 1 jeepney/shuttle slot for every fifty (50) sqm of spectator area'
                        },
                        {
                          value: '1 bus parking slot for every two hundred (200) spectators'
                        }
                      ]
                    }
                  ]
                },
                {
                  class_id: [29],
                  text: 'Division H-4',
                  textclass: 'font-weight-bold',
                  subitems: [
                    {
                      value: '· Covered amusement parks, amusement and entertainment complexes',
                      listsa: [
                        {
                          value: '1 car slot and 1 jeepney/shuttle slot for every fifty (50) sqm of spectator area'
                        },
                        {
                          value: '1 bus parking slot for every two hundred (200) spectators'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              text: 'Building Height Limit (BHL)',
              rule: 'Table VII.2 Building Height Limit (BHL) by Type of Use or Occupancy',
              subitems: [
                {
                  flex: 'xs12',
                  text: 'Parks and Open Recreational and Entertainment spaces',
                  listsa: [
                    {
                      text: 'Maximum Height in meters:',
                      value: '15m or the duly approved BHL in the major zone it is part of'
                    }
                  ]
                },
                {
                  flex: 'xs12',
                  text: 'Cultural',
                  listsa: [
                    {
                      text: 'Maximum Height in meters:',
                      value: '30m or the duly approved BHL in the major zone it is part of'
                    }
                  ]
                }
              ]
            },
            {
              flex: 'xs12',
              text: 'Percentage Site Occupancy (PSO)',
              rule: 'Percentage Site Occupancy based on lot types - Figures VIII.1 - VIII.11',
              rule_desc: 'Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
              rule_desc_class: 'caption font-weight-thin font-italic',
              subitems: [
                {
                  text: 'Commercial (Com-1, Com-2, Com-3)',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '75% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '90% of TLA'
                    }
                  ]
                },
                {
                  text: 'Commercial (Com-1, Com-2, Com-3) with sprinkler system & firewalls',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '75% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '90% of TLA'
                    }
                  ]
                },
                {
                  text: 'Cultural (without sprinklers)',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '60% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '60% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '65% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '65% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '65% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '65% of TLA'
                    }
                  ]
                },
                {
                  text: 'Cultural (with sprinklers)',
                  listsa: [
                    {
                      text: 'All lot types:',
                      value: '70% of TLA',
                      footer_rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)'
                    },
                    {
                      text: 'Parks and Open Recreational Spaces:',
                      value: '20% of TLA'
                    },
                    {
                      text: 'Cultural:',
                      value: '60% of TLA (without firewall), 70% of TLA (with firewall)'
                    }
                  ]
                }
              ]
            },
            {
              flex: 'xs12',
              text: 'Occupant Load',
              rule: 'Rule XII. Section 1207 Table XII.1',
              listsb: [{
                text: 'Auditoriums, Theaters, Churches and chapels, Dance Floors, Reviewing Stands, Stadia',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '0.65 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '50'
                }]
              }]
            }
          ]
        },
        {
          class_id: [30,31],
          text: 'I. ASSEMBLY with Occupant Load 1000 or more',
          rule: 'NBCP Rule VII Sec 701',
          rule_desc: 'Assembly buildings with a stage and an occupant load of more than 1000',
          rule_desc_class: 'red--text',
          subitems: [
            {
              text: 'Division I-1',
              textclass: 'font-weight-bold',
              subitems: [
                {
                  class_id: [31],
                  text: 'PRE',
                  textclass: 'font-weight-bold',
                  value: `(Park Structures, Recreation and Entertainment) - low-rise or medium-rise building/structure; low to medium intensity recreational or entertainment functions`
                },
                {
                  class_id: [30],
                  text: 'CUL',
                  textclass: 'font-weight-bold',
                  value: `(Cultural) - community to national level cultural use/occupancy; low to medium rise building/structure for cultural activities`,
                  list_num: [
                    {
                      value: 'Colisea and sports complexes'
                    },
                    {
                      value: 'Theaters and convention centers'
                    },
                    {
                      value: 'Concert halls and open houses'
                    },
                    {
                      value: 'Convention centers'
                    }
                  ]
                }
              ]
            }
          ],
          items: [
            {
              text: 'Setback',
              rule: 'Table VIII.3 Setbacks for Commercial, Industrial, Institutional and Recreational Buildings',
              listsa: [
                {
                  value: '30.00m & above (Road Right-of-Way)',
                  subitems: [{
                    text: '- 8.00m (front), 5.00m (side), 5.00m (rear)'
                  }]
                },
                {
                  value: '25.00m to 29.00m (Road Right-of-Way)',
                  subitems: [{
                    text: '- 6.00m (front), 3.00m (side), 3.00m (rear)'
                  }]
                },
                {
                  value: '20.00m to 24.00 (Road Right-of-Way)',
                  subitems: [{
                    text: '- 5.00m (front), 3.00m (side), 3.00m (rear)'
                  }]
                },
                {
                  value: '10.00m to 19.00 (Road Right-of-Way)',
                  subitems: [{
                    text: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                  }]
                },
                {
                  value: 'Below 10.00m (Road Right-of-Way)',
                  subitems: [{
                    text: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                  }]
                }
              ]
            },
            {
              text: 'Firewall',
              rule: `NBCP Rule VII, Section 704 (C)(iv)`,
              listsa: [
                {
                  flex: 'xs12',
                  text: 'Maximum Length:',
                  ruleclass: 'font-weight-bold',
                  value: 'up to 70% of the property line'
                },
                {
                  flex: 'xs12',
                  text: 'Conditions:',
                  listsb: [{
                    text: 'Provision of fully functional sprinkler system'
                  },
                  {
                    text: 'Installation of other fire-retardant or fire suppression devices'
                  },
                  {
                    text: 'Prescribed setbacks, yards, and courts fronting the RROW are fully complied'
                  },
                  {
                    text: 'All applicable stipulations of the Fire Code (RA 9514) are strictly followed:',
                    listsc: [{
                      text: 'Number, type, location of fire exits'
                    }]
                  }]
                }
              ]
            },
            {
              text: 'Parking',
              rule: `Table VII.4 Minimum Required Off-Street (Off-RROW) cum On-Site Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use/Occupancy`,
              subitems: [
                {
                  text: 'Division I-1',
                  textclass: 'font-weight-bold',
                  lists: [
                    {
                      value: `Public recreational assembly buildings (stadia, sports complexes, convention centers, etc)`,
                      listsa: [
                        {
                          value: '1 car slot and 1 jeepney/shuttle slot for every fifty (50) sqm of spectator area'
                        },
                        {
                          value: '1 bus parking slot for every two hundred (200) spectators'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              text: 'Building Height Limit (BHL)',
              rule: 'Table VII.2 Building Height Limit (BHL) by Type of Use or Occupancy',
              subitems: [
                {
                  class_id: [31],
                  text: 'Parks and Open Recreational and Entertainment spaces',
                  listsa: [
                    {
                      text: 'Maximum Height in meters:',
                      value: '15m or the duly approved BHL in the major zone it is part of'
                    }
                  ]
                },
                {
                  class_id: [30],
                  text: 'Cultural',
                  listsa: [
                    {
                      text: 'Maximum Height in meters:',
                      value: '30m or the duly approved BHL in the major zone it is part of'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Percentage Site Occupancy (PSO)',
              rule: 'Percentage Site Occupancy based on lot types - Figures VIII.1 - VIII.11',
              rule_desc: 'Table VII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
              subitems: [
                {
                  text: 'Commercial (Com-1, Com-2, Com-3)',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '75% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '80% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '90% of TLA'
                    }
                  ]
                },
                {
                  text: 'Commercial (Com-1, Com-2, Com-3) with sprinkler system & firewalls',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '85% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '85% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '90% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '95% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '95% of TLA'
                    }
                  ]
                },
                {
                  text: 'Cultural (without sprinklers)',
                  listsa: [
                    {
                      text: 'Interior (or Rear) and End Lot:',
                      value: '60% of TLA'
                    },
                    {
                      text: 'Inside (or Regular) Lot:',
                      value: '60% of TLA'
                    },
                    {
                      text: 'Corner Lot:',
                      value: '65% of TLA'
                    },
                    {
                      text: 'Through Lot:',
                      value: '65% of TLA'
                    },
                    {
                      text: 'Corner Through Lot:',
                      value: '65% of TLA'
                    },
                    {
                      text: 'Corner Lot Abutting 3 or more streets, rivers, etc.:',
                      value: '65% of TLA'
                    }
                  ]
                },
                {
                  text: 'Cultural (with sprinklers)',
                  listsa: [
                    {
                      text: 'All lot types:',
                      value: '70% of TLA'
                    }
                  ]
                },
                {
                  rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
                  listsa: [
                    {
                      text: 'Parks and Open Recreational Spaces:',
                      value: '20% of TLA'
                    },
                    {
                      text: 'Cultural:',  
                      value: '60% of TLA (without firewall), 70% of TLA (with firewall)'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Occupant Load',
              rule: 'Rule XII. Section 1207 Table XII.1',
              listsb: [{
                text: 'Auditoriums, Theaters, Churches and chapels, Dance Floors, Reviewing Stands, Stadia',
                listsc: [{
                  text: 'Unit Area per Occupant:',
                  value: '0.65 sqm'
                },
                {
                  text: 'Min. of 2 exits where no. of occupants is over:',
                  value: '50'
                }]
              }]
            }
          ]
        },
        {
          class_id: [32,33,34,35,36],
          text: 'J. ACCESSORY (Agricultural and other occupancies/ Uses not specifically mentioned Under Groups A through I)',
          rule: 'NBCP Rule VII Sec 701',
          subitems: [
            {
              class_id: [32,33, 34],
              text: 'Division J-1',
              textclass: 'font-weight-bold',
              subitems: [
                {
                 class_id: [32],
                  text: 'A',
                  textclass: 'font-weight-bold',
                  value: '(Agricultural) - agricultural or agriculture-related use or occupancy; low to medium rise building/structure for low to high intensity agricultural or related activities'
                },
                {
                 class_id: [33],
                  text: 'AI',
                  textclass: 'font-weight-bold',
                  value: '(Agro-Industrial) - agro-industrial or related use or occupancy; low to medium rise building/structure for low to high intensity agricultural or related activities'
                },
                {
                 class_id: [34],
                  text: 'PUD',
                  textclass: 'font-weight-bold',
                  value: '(Planned Unit Development) - land development or redevelopment schemes for new or built-up project site; must require a Comprehensive Development Master Plan (CDMP) or its acceptable equivalent',
                }
              ]
            },
            {
             class_id: [35],
              text: 'Division J-2',
              textclass: 'font-weight-bold',
              subitems: [
                {
                  text: 'PUD',
                  textclass: 'font-weight-bold',
                  value: '(Planned Unit Development) - land development or redevelopment schemes for new or built-up project site; must require a Comprehensive Development Master Plan (CDMP) or its acceptable equivalent',
                  list_num: [
                    {
                      value: 'Private gardens, carports'
                    },
                    {
                      value: 'Towers, smokestacks and chimneys'
                    },
                    {
                      value: 'Swimming pools including shower and locker rooms'
                    },
                    {
                      value: 'Fence over 1.8m high, separate firewalls'
                    },
                    {
                      value: 'Steel and/or concrete tanks'
                    }
                  ]
                }
              ]
            },
            {
              class_id: [36],
              text: 'Division J-3',
              textclass: 'font-weight-bold',
              list_num: [
                {
                  value: 'Stages, platforms, and similar structures'
                },
                {
                  value: 'Pelota, tennis, badminton or basketballs courts'
                },
                {
                  value: 'Tombs, mausoleums and niches'
                },
                {
                  value: 'Aviaries and aquariums and zoo structures'
                },
                {
                  value: 'Banks and record vaults'
                }
              ]
            }
          ],
          items: [
            {
              text: 'Setback',
              rule: 'Table VIII.3 Setbacks for Commercial, Industrial, Institutional and Recreational Buildings',
              listsa: [
                {
                  value: '30.00m & above (Road Right-of-Way)',
                  subitems: [
                    {
                      text: '- 8.00m (front), 5.00m (side), 5.00m (rear)'
                    }
                  ]
                },
                {
                  value: '25.00m to 29.00m (Road Right-of-Way)',
                  subitems: [
                    {
                      text: '- 5.00m (front), 3.00m (side), 3.00m (rear)'
                    }
                  ]
                },
                {
                  value: '20.00m to 24.00 (Road Right-of-Way)',
                  subitems: [
                    {
                      text: '- 5.00m (front), 3.00m (side), 3.00m (rear)'
                    }
                  ]
                },
                {
                  value: '10.00m to 19.00 (Road Right-of-Way)',
                  subitems: [
                    {
                      text: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                    }
                  ]
                },
                {
                  value: 'Below 10.00m (Road Right-of-Way)',
                  subitems: [
                    {
                      text: '- 5.00m (front), 2.00m (side), 2.00m (rear)'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Firewall',
              rule: 'NBCP Rule VII, Section 704 (C)(iv)',
              ruleclass: 'caption font-weight-bold font-italic',
              listsa: [
                {
                  flex: 'xs12',
                  text:'Maximum Length:',
                  value: 'up to 70% of the property line'
                },
                {
                  flex: 'xs12',
                  text: 'Conditions:',
                  listsb: [
                    {
                      text: 'Provision of fully functional sprinkler system'
                    },
                    {
                      text: 'Installation of other fire-retardant or fire suppression devices'
                    },
                    {
                      text: 'Prescribed setbacks, yards, and courts fronting the RROW are fully complied'
                    },
                    {
                      text: 'All applicable stipulations of the Fire Code (RA 9514) are strictly followed:',
                      listsc: [
                      {
                        text: 'Number, type, location of fire exits'
                      }]
                    }
                  ]
                }
              ]
            },
            {
              text: 'Parking',
              rule: 'Table VII.4 Minimum Required Off-Street (Off-RROW) cum On-Site Parking Slot, Parking Area and Loading/Unloading Space Requirements by Allowed Use/Occupancy',
              subitems: [
                {
                  class_id: [32,33,34],
                  text: 'Division J-1',
                  textclass: 'font-weight-bold',
                  lists: [
                    {
                      value: 'A - Agriculture-related uses or occupancies',
                      listsa: [
                        {
                          value: '1 car slot for every one thousand (1000) sqm of gross floor area'
                        },
                        {
                          value: '1 bus slot for every one hundred (100) workers'
                        },
                        {
                          value: '1 off-RROW passenger loading space good for two (2) queued jeepney/shuttle slots if number of workers exceed two hundred (200)'
                        },
                        {
                          value: '1 loading slot for truck or vehicle; twelve (12) meter long container van + six (6) meter long/hooded prime mover'
                        },
                        {
                          value: '1 loading slot for standard truck for every five thousand (5000) sqm of GFA'
                        },
                        {
                          value: 'Provide truck maneuvering area within property or lot line'
                        },
                        {
                          value: 'Not required if located outside urbanized area'
                        }
                      ]
                    }
                  ]
                },
                {
                  class_id: [35,36],
                  text: 'Division J-2',
                  textclass: 'font-weight-bold',
                  lists: [
                    {
                      value: 'A - Agriculture-related uses or occupancies',
                      listsa: [
                        {
                          text: '1 car slot for every one thousand (1000) sqm of gross floor area'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              text: 'Building Height Limit (BHL)',
              rule: 'Table VII.2 Building Height Limit (BHL) by Type of Use or Occupancy',
              subitems: [
                {
                  class_id: [32,33],
                  text: 'Agricultural/Agro-Industrial Tourism',
                  listsa: [
                    {
                      value: 'Maximum Height in meters: three (3) to fifteen (15) m or the duly approved BHL in the major zone it is part of'
                    }
                  ]
                },
                {
                  class_id: [34,35],
                  text: 'Planned Unit Development (PUD)',
                  listsa: [
                    {
                      value: 'PUD at a reclamation area close to an operating airport:  three (3) to fifteen (15) storeys or ten (10) to forty-five (45) m (with ATO-prescribed BHL as needed)'
                    },
                    {
                      value: 'PUD at a reclamation area:  three (3) to thirty (30) storeys or ten (10) to thirty (30) m'
                    },
                    {
                      value: 'PUD at a coastal area: sixteen (16) to forty-five (45) storeys or forty-eight (48) to one hundred thirty-five (135) m'
                    },
                    {
                      value: 'PUD at an inland area close to an operating airport:  three (3) to twenty-five (25) storeys or ten (10) to seventy-five (75) m (with ATO-prescribed BHL as needed)'
                    },
                    {
                      value: 'PUD at an inland area: twelve (12) to sixty (60) storeys or thirty-six (36) to one hundred eighty (180) m'
                    }
                  ]
                }
              ]
            },
            {
              flex: 'xs12',
              text: 'Percentage Site Occupancy (PSO)',
              rule: 'Table VIII.1 Allowable Maximum Total Gross Floor Area (TGFA) Based on the Allowed Percentage of Site Occupancy (PSO) of the Total Lot Area (TLA)',
              listsa: [
                {
                  text: 'Planned Unit Development:',
                  value: '70% of TLA'
                }
              ]
            }
          ]
        }
      ],
      scopeItems: [
        {
          label: 'New Construction'
        },
        {
          label: 'Erection'
        },
        {
          label: 'Addition'
        },
        {
          label: 'Alteration'
        },
        {
          label: 'Renovation'
        },
        {
          label: 'Conversion'
        },
        {
          label: 'Repair'
        },
        {
          label: 'Moving'
        },
        {
          label: 'Raising'
        },
        {
          label: 'Accesory Building Structure'
        }
      ],
      usesItems: [
        {
          label: 'Residential'
        },
        {
          label: 'Industrial'
        },
        {
          label: 'Agricultural'
        },
        {
          label: 'Commercial'
        },
        {
          label: 'Institutional'
        }
      ],
      charactersItems: [
        {
          label: 'Group A - Residential Dwelling'
        },
        {
          label: 'Group B - Residential Hotel Apartment'
        },
        {
          label: 'Group C - Educational Recreation'
        },
        {
          label: 'Group D - Institutional'
        },
        {
          label: 'Group E - Business and Mercantile'
        },
        {
          label: 'Group F - Industrial'
        },
        {
          label: 'Group G - Industrial Storage & hazardous'
        },
        {
          label: 'Group H - Recreational Assembly Occupant load less than 1000'
        },
        {
          label: 'Group I - Recreational Assembly Occupant load 1000 or more'
        },
        {
          label: 'Group J - Agricultural Accesory'
        }
      ],
      definitions: [
        {
          text: 'ADDITION - a new construction which increases the height and/or floor area of existing buildings/structures'
        },
        {
          text: 'ALTERATION - works in buildings/structures involving changes in the materials used, partitioning, location/size of openings, structural parts, existing utilities and equipment but does not increase the building height and/or floor area'
        },
        {
          text: 'CONSTRUCTION - all on-site work done in the site preparation, excavation, foundation, assembly of all the components and installation of utilities, machineries and equipment of buildings/structures'
        },
        {
          text: 'CONVERSION - a change in the use/occupancy of buildings/structures or any portion/s thereof, which has different requirements'
        },
        {
          text: 'RENOVATION - any physical change made on buildings/structures to increase the value, quality, and/or to improve the aesthetic'
        },
        {
          text: 'REPAIR - remedial work done on any damaged or deteriorated portion/s of building/structure to restore to its original condition'
        }
      ]
    }
  }
}