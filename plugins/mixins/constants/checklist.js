export default {
  data () {
    return {
      checkitems: [
      {
        class: '',
        items: [
          {
            title: 'A.1 Clearances/Certificates (from other Offices)- original with photocopy',
            class: 'font-weight-bold'
          },
          {
            title: '1) Notarized Zoning Location Clearance (CPDO) [sec.302.12.a]',
            key: 'notarized_loc_clearance'
          },
          {
            title: 'Additional Requirements for Locational Clearance',
            class: 'font-weight-bold',
            items: [
              {
                text: 'Submit Certificate of Height Clearance Structure from Air Transportation Office for tall/high-rise buildings',
                key: 'tall_sctructure'
              },
              {
                text: 'Submit Permit from National Water Resource Board if project has groundwater extraction',
                key: 'groundwater_extraction'
              },
              {
                text: 'Submit Drainage Impact Statement if project is major Development',
                key: 'major_devt'
              },
              {
                text: 'Submit Socio-Economic Impact Statement if project has large employment requirement',
                key: 'emp_requirement'
              },
              {
                text: 'Submit Initial Environmental Examination (EE) signed by licensed Environmental Planner and according to DENR specified format for light industrial project uses',
                key: 'light_industrial'
              },
              {
                text: 'Submit Water Management Plan if project is a heavy water-using facility',
                key: 'heavy_water'
              },
              {
                text: 'Submit Traffic Impact Assessment if project is a potential Traffic Generating Development',
                key: 'trafic_generating'
              },
              {
                text: 'Submit Notarized Certificate of No Objection from affected neighbors if project has Firewall/Abutment on any side of the property',
                key: 'no_objection'
              }
            ]
          },
          {
            title: '2) BFP Fire Safety Evaluation Certificate (FSEC) [Sec 303.10]',
            key: 'safety_certificate'
          },
          {
            title: '3) CSHP (DOLE) D.O. No. 13, 1998; NBC MC no. 02, 2011.',
            key: 'cshp',
            lists: [
              {
                text: 'up to 2-storey residential or minor repair works: stamped receive by DOLE',
                class: 'font-weight-bold'
              },
              {
                text: 'construction of commercial building: should be duly Approved by DOLE'
              }
            ]
          },
          {
            title: '4) Others (as deemed applicable)-original with photo copy',
            class: 'ml-7'
          },
          {
            title: 'DPWH Clearance (if along National Highway) [Sec.302.12.b.i]',
            key: 'dpwh_clearance'
          },
          {
            title: 'CAAP (ATO) Clearance (if applicable) [Sec.302.12.b.ii]',
            key: 'caap_clearance'
          },
          {
            title: 'DENR ECC for Environmentally Critical Project (Sec. 302.12.b.vi]',
            key: 'denr_project'
          },
          {
            title: 'Drainage Clearance (from DPWH/CEO) if required in the ECC and if there is existing drainage/waterway affected',
            key: 'drainage_clearance'
          },
          {
            title: 'Traffic Impact Assessment (TIA) for major Development such as, Malls, Convention Centers, Sports Complex, etc. duly approved by the Traffic Management and Control Board (TMCB)',
            key: 'traffic_impact_assessment',
            listsr: [{
              text: 'Submit approved Site Development plan and parking layout and tabulation signed by technical working group.',
              class: 'font-weight-bold'
            }]
          },
          {
            title: 'CEO RROW Clearance (if along City/Brgy/Subd Road)',
            key: 'ceo_rrow_clearance'
          },
          {
            title: 'A.2) Legal Documents (original with photocopy)',
            class: 'font-weight-bold',
            items: [
              {
                text: '1) Certified True Copy of Land Title (from the Land Registration Authority) [section 302.2.i]',
                key: 'land_title_registered'
              },
              {
                text: `2) Certified True Copy of Tax Declaration of the property (from the City Assessor's Office) [Sec.302.a.2.ii]`,
                key: 'tax_dec'
              },
              {
                text: `3) Certified True Copy of Current Real Property Tax Receipt (from the City Treasurer's Office) [Sec.302.2.a.iii]`,
                key: 'real_property_tax'
              },
              {
                text: `4) Barangay Clearance of NO SITE CONFLICT`,
                key: 'brgy_clearance_no_conflict"'
              },
              {
                text: `5) If Applicant is not the registered owner of the lot (whichever is applicable) [Sec.302.2.b]`,
                class: 'ml-8',
                items: [
                  {
                    text: 'Notarized Deed of Absolute Sale',
                    key: 'absolute_sale'
                  },
                  {
                    text: 'Notarized Contract of Lease',
                    key: 'contract_of_lease'
                  },
                  {
                    text: 'Notarized Contract of Sale',
                    key: 'contract_of_sale'
                  },
                  {
                    text: 'Notarized Authority to Construct from the Lot Owner',
                    key: 'construct_from_lot'
                  }
                ]
              }
            ]
          },
          {
            title: '6) Authorized person who will sign for and in behalf of the applicant',
            key: 'authorized_person',
            items: [
              {
                text: 'Notarized Special Power of Attorney (SPA)',
                key: 'power_of_attorney'
              },
              {
                text: 'Notarized Secretary Certificate for company owned application',
                key: 'sec_certificate'
              }
            ]
          }
        ]
      },
      {
        class: '',
        items: [
          {
            title: 'Community Association Requirements for Residential Buildings',
            class: 'font-weight-bold text-decoration-underline',
            items: [
              {
                text: 'Association Board Resolution',
                key: 'assoc_board_resolution',
                class: 'font-weight-bold'
              },
              {
                text: `Applicant's Certificate of Membership`,
                class: 'font-weight-bold mr-1',
                textval: 'in said Community Association',
                key: 'certificate_of_member'
              },
              {
                text: `City Housing Clearance`,
                class: 'font-weight-bold mr-1',
                key: 'city_housing_clearance',
                textval: `(if Government housing project)`,
                lista: [
                  {
                    text: '- If housing project is under the City;',
                    class: 'font-weight-bold mr-1',
                    textval: 'signatory of Lot Owner in Building Permit Form should be signed by the',
                    textval1: 'City Administrator',
                    class2: 'font-weight-bold mr-1'
                  },
                  {
                    text: '- If housing project is under the NHA;',
                    class: 'font-weight-bold mr-1',
                    textval: 'signatory of Lot Owner in Building Permit Form should be signed by the Regional Manager'
                  }
                ]
              }
            ]
          },
          {
            title: 'For New Subdivision Developments:',
            class: 'font-weight-bold',
            items: [
              {
                text: 'Approved Development Permit',
                class: 'font-weight-bold mr-1',
                key: 'devt_permit',
                textval: '(from SP/HLURB)'
              }
            ]
          },
          {
            title: 'For residential buildings in Open Market Subdivision',
            class: 'font-weight-bold',
            items: [
              {
                text: 'Building plans should be stamped approved',
                class: 'font-weight-bold mr-1',
                key: 'building_stamp',
                textval: 'by subdivision Administration'
              }
            ]
          },
          {
            title: '7) Other Legal Requirements',
            items: [
              {
                text: 'Photocopy of Owners/Applicants valid I.D with three (3)specimen signatures.',
                key: 'three_signed_valid_id'
              },
              {
                text: 'Photocopy of PRC IDs and current PTR and TIN of all the signing Professionals [NBC MC No.01, 2005; Item 4]',
                key: 'prc_id_signed_by_prof'
              }
            ]
          },
          {
            title: '8) If owner of lot is deceased and Land Title has not yet been transferred:',
            items: [
              {
                text: 'Extrajudicial Partition',
                key: 'extra_judicial_partition'
              }
            ]
          },
          {
            title: 'B] Technical Documents (by Owner and Hired Professionals)',
            class: 'font-weight-bold',
            items: [
              {
                text: '1) Notarized Application Letter [Sec. 302]',
                key: 'notarized_app_letter'
              },
              {
                text: '2) Notarized Unified Building Permit Form (5 copies) with 5 sets of Civil/Architectural Plans duly signed and sealed by a licensed Civil Engineer/Architect [Sec. 302.3.b-c, Sec. 302.4-5]',
                key: 'notarized_building_signed'
              },
              {
                text: '3) Electrical Permit Form (3 copies) with 5 sets Electrical Plans Duly signed and sealed by a licensed Professional Electrical Engineer [Sec.302.3.d, Sec.302.6]',
                key: 'electrical_permit_signed'
              },
              {
                text: '4) Plumbing Permit Form (3 copies) with 5 sets Plumbing plans duly signed and sealed by licensed Sanitary Engineer/Master Plumber [Sec.302.3.g, Sec.302.9]',
                key: 'plumbing_permit_signed'
              },
              {
                text: '5) Sanitary Permit Form (3 copies) with 5 sets Plumbing plans duly signed and sealed by licensed Sanitary Engineer/Master Plumber [Sec.302.3.g, Sec.302.9]',
                key: 'sanitary_permit_signed'
              },
              {
                text: '6) Mechanical Permit Form (2 copies) with 5 sets mechanical plans signed and sealed by a licensed Mechanical Engineer.',
                key: 'mechanical_permit_signed'
              },
              {
                text: '7) Electronics Permit Form (2 copies) with 5 sets electronic plans signed and sealed by a licensed Electronic Engineer.',
                key: 'electronics_permit_signed'
              },
              {
                text: '8) Sketch/lot plan with vicinity map drawn to scale signed and sealed by a licensed Geodetic Engineer (Sec.302.3.a,Sec.302.11) and relocation survey plan and reports. (4 copies)',
                key: 'sketch_lot_plan_signed'
              },
              {
                text: '9) Project Technical Specification (signed and sealed)[Sec.302] (2 copies)',
                key: 'proj_technical_specs_signed'
              },
              {
                text: '10) Bill of Materials and Cost Estimates (signed and sealed)[Sec.302] (4 copies)',
                key: 'material_bill_costs'
              },
              {
                text: '11) Boring and Plate Load Test Result/Report by licensed Civil/Geotechnical Engineer (for building three storeys and above) [Sec.302.5 if extending building for additional storey; submit affidavit that the foundation can carry the proposed additional floors. (2 copies)',
                key: 'boring_palte_report'
              },
              {
                text: '12) Structural Design Analysis for all building with design analysis based on NSCP 2015(except one storey building and single detached structure with total floor area of 20sq.m or less) [Sec.302.5.c] (2 copies)',
                key: 'b_structural_design' 
              },
              {
                text: '13) Seismic Analysis [Sec.302.5.3]',
                key: 'seismic_analysis'
              },
              {
                text: '14) Picture of site with landmarks',
                key: 'site_picture_with_landmarks'
              }
            ]
          }
        ]
      }],
      returnitems: [
      {
        title: '1) Notarized Zoning Location Clearance (CPDO) [sec.302.12.a]',
        key: 'notarized_loc_clearance'
      },
      {
        title: 'Submit Certificate of Height Clearance Structure from Air Transportation Office for tall/high-rise buildings',
        key: 'tall_sctructure'
      },
      {
        title: 'Submit Permit from National Water Resource Board if project has groundwater extraction',
        key: 'groundwater_extraction'
      },
      {
        title: 'Submit Drainage Impact Statement if project is major Development',
        key: 'major_devt'
      },
      {
        title: 'Submit Socio-Economic Impact Statement if project has large employment requirement',
        key: 'emp_requirement'
      },
      {
        title: 'Submit Initial Environmental Examination (EE) signed by licensed Environmental Planner and according to DENR specified format for light industrial project uses',
        key: 'light_industrial'
      },
      {
        title: 'Submit Water Management Plan if project is a heavy water-using facility',
        key: 'heavy_water'
      },
      {
        title: 'Submit Traffic Impact Assessment if project is a potential Traffic Generating Development',
        key: 'trafic_generating'
      },
      {
        title: 'Submit Notarized Certificate of No Objection from affected neighbors if project has Firewall/Abutment on any side of the property',
        key: 'no_objection'
      },
      {
        title: '2) BFP Fire Safety Evaluation Certificate (FSEC) [Sec 303.10]',
        key: 'safety_certificate'
      },
      {
        title: '3) CSHP (DOLE) D.O. No. 13, 1998; NBC MC no. 02, 2011.',
        key: 'cshp'
      },
      {
        title: 'DPWH Clearance (if along National Highway) [Sec.302.12.b.i]',
        key: 'dpwh_clearance'
      },
      {
        title: 'CAAP (ATO) Clearance (if applicable) [Sec.302.12.b.ii]',
        key: 'caap_clearance'
      },
      {
        title: 'DENR ECC for Environmentally Critical Project (Sec. 302.12.b.vi]',
        key: 'denr_project'
      },
      {
        title: 'Drainage Clearance (from DPWH/CEO) if required in the ECC and if there is existing drainage/waterway affected',
        key: 'drainage_clearance'
      },
      {
        title: 'Traffic Impact Assessment (TIA) for major Development such as, Malls, Convention Centers, Sports Complex, etc. duly approved by the Traffic Management and Control Board (TMCB)',
        key: 'traffic_impact_assessment'
      },
      {
        title: 'CEO RROW Clearance (if along City/Brgy/Subd Road)',
        key: 'ceo_rrow_clearance'
      },
      {
        title: '1) Certified True Copy of Land Title (from the Land Registration Authority) [section 302.2.i]',
        key: 'land_title_registered'
      },
      {
        title: `2) Certified True Copy of Tax Declaration of the property (from the City Assessor's Office) [Sec.302.a.2.ii]`,
        key: 'tax_dec'
      },
      {
        title: `3) Certified True Copy of Current Real Property Tax Receipt (from the City Treasurer's Office) [Sec.302.2.a.iii]`,
        key: 'real_property_tax'
      },
      {
        title: `4) Barangay Clearance of NO SITE CONFLICT`,
        key: 'brgy_clearance_no_conflict"'
      },
      {
        title: 'Notarized Deed of Absolute Sale',
        key: 'absolute_sale'
      },
      {
        title: 'Notarized Contract of Lease',
        key: 'contract_of_lease'
      },
      {
        title: 'Notarized Contract of Sale',
        key: 'contract_of_sale'
      },
      {
        title: 'Notarized Authority to Construct from the Lot Owner',
        key: 'construct_from_lot'
      },
      {
        title: '6) Authorized person who will sign for and in behalf of the applicant',
        key: 'authorized_person'
      },
      {
        title: 'Notarized Special Power of Attorney (SPA)',
        key: 'power_of_attorney'
      },
      {
        title: 'Notarized Secretary Certificate for company owned application',
        key: 'sec_certificate'
      },
      {
        title: 'Association Board Resolution',
        key: 'assoc_board_resolution'
      },
      {
        title: `Applicant's Certificate of Membership`,
        key: 'certificate_of_member'
      },
      {
        title: 'City Housing Clearance',
        key: 'city_housing_clearance'
      },
      {
        title: 'Approved Development Permit',
        key: 'devt_permit'
      },
      {
        title: 'Building plans should be stamped approved',
        key: 'building_stamp'
      },
      {
        title: 'Photocopy of Owners/Applicants valid I.D with three (3)specimen signatures.',
        key: 'three_signed_valid_id'
      },
      {
        title: 'Photocopy of PRC IDs and current PTR and TIN of all the signing Professionals [NBC MC No.01, 2005; Item 4]',
        key: 'prc_id_signed_by_prof'
      },
      {
        title: 'Extrajudicial Partition',
        key: 'extra_judicial_partition'
      },
      {
        title: '1) Notarized Application Letter (Sec. 302)',
        key: 'notarized_app_letter'
      },
      {
        title: '2) Notarized Unified Building Permit Form (5 copies) with 5 sets of Civil/Architectural Plans duly signed and sealed by a licensed Civil Engineer/Architect [Sec. 302.3.b-c, Sec. 302.4-5]',
        key: 'notarized_building_signed'
      },
      {
        title: '3) Electrical Permit Form (3 copies) with 5 sets Electrical Plans Duly signed and sealed by a licensed Professional Electrical Engineer [Sec.302.3.d, Sec.302.6]',
        key: 'electrical_permit_signed'
      },
      {
        title: '4) Plumbing Permit Form (3 copies) with 5 sets Plumbing plans duly signed and sealed by licensed Sanitary Engineer/Master Plumber [Sec.302.3.g, Sec.302.9]',
        key: 'plumbing_permit_signed'
      },
      {
        title: '5) Sanitary Permit Form (3 copies) with 5 sets Plumbing plans duly signed and sealed by licensed Sanitary Engineer/Master Plumber [Sec.302.3.g, Sec.302.9]',
        key: 'sanitary_permit_signed'
      },
      {
        title: '6) Mechanical Permit Form (2 copies) with 5 sets mechanical plans signed and sealed by a licensed Mechanical Engineer.',
        key: 'mechanical_permit_signed'
      },
      {
        title: '7) Electronics Permit Form (2 copies) with 5 sets electronic plans signed and sealed by a licensed Electronic Engineer.',
        key: 'electronics_permit_signed'
      },
      {
        title: '8) Sketch/lot plan with vicinity map drawn to scale signed and sealed by a licensed Geodetic Engineer (Sec.302.3.a,Sec.302.11) and relocation survey plan and reports. (4 copies)',
        key: 'sketch_lot_plan_signed'
      },
      {
        title: '9) Project Technical Specification (signed and sealed)[Sec.302] (2 copies)',
        key: 'proj_technical_specs_signed'
      },
      {
        title: '10) Bill of Materials and Cost Estimates (signed and sealed)[Sec.302] (4 copies)',
        key: 'material_bill_costs'
      },
      {
        title: '11) Boring and Plate Load Test Result/Report by licensed Civil/Geotechnical Engineer (for building three storeys and above) [Sec.302.5 if extending building for additional storey; submit affidavit that the foundation can carry the proposed additional floors. (2 copies)',
        key: 'boring_palte_report'
      },
      {
        title: '12) Structural Design Analysis for all building with design analysis based on NSCP 2015(except one storey building and single detached structure with total floor area of 20sq.m or less) [Sec.302.5.c] (2 copies)',
        key: 'b_structural_design'
      },
      {
        title: '13) Seismic Analysis [Sec.302.5.3]',
        key: 'seismic_analysis'
      },
      {
        title: '14) Picture of site with landmarks',
        key: 'site_picture_with_landmarks'
      }]
    }
  }
}
