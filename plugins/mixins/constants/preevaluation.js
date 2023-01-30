export default {
  data () {
    return {
      typeItems: [
        {
          label: 'Sole Proprietorship',
          value: 'Sole Proprietorship'
        },
        {
          label: 'Partnership/Corporation',
          value: 'Partnership/Corporation'
        },
        {
          label: 'Community Association',
          value: 'Community Association'
        },
        {
          label: 'Government',
          value: 'Government'
        }
      ],
      buildingArray: [
        {
          text: 'Site Development Plans',
          key: 'side_dev_plan',
          note: 'side_dev_plan_note',
          view: 'side_dev_plan_view',
          load: 'side_dev_plan_load',
          required: true
        },
        {
          text: 'REVISED: Site Development Plans',
          key: 'revised_side_dev_plan',
          note: 'revised_side_dev_plan_note',
          view: 'revised_side_dev_plan_view',
          load: 'revised_side_dev_plan_load',
          require: 'revised_side_dev_plan_require',
          required: false
        },
        {
          text: 'Floor Plans',
          key: 'floor_plan',
          note: 'floor_plan_note',
          view: 'floor_plan_view',
          load: 'floor_plan_load',
          required: true
        },
        {
          text: 'REVISED: Floor Plans',
          key: 'revised_floor_plan',
          note: 'revised_floor_plan_note',
          view: 'revised_floor_plan_view',
          load: 'revised_floor_plan_load',
          require: 'floor_plan_require',
          required: false
        },
        {
          text: '4-Elevations',
          key: 'four_elevation',
          note: 'four_elevation_note',
          view: 'four_elevation_view',
          load: 'four_elevation_load',
          required: true
        },
        {
          text: 'REVISED: 4-Elevations',
          key: 'revised_four_elevation',
          note: 'revised_four_elevation_note',
          view: 'revised_four_elevation_view',
          load: 'revised_four_elevation_load',
          require: 'revised_four_elevation_require',
          required: false
        },
        {
          text: '2-Sections',
          key: 'two_elevation',
          note: 'two_elevation_note',
          view: 'two_elevation_view',
          load: 'two_elevation_load',
          required: true
        },
        {
          text: 'REVISED: 2-Sections',
          key: 'revised_two_elevation',
          note: 'revised_two_elevation_note',
          view: 'revised_two_elevation_view',
          load: 'revised_two_elevation_load',
          require: 'revised_two_elevation_require',
          required: false
        },
        {
          text: 'Perspective',
          key: 'perspective',
          note: 'perspective_note',
          view: 'perspective_view',
          load: 'perspective_load',
          required: true
        },
        {
          text: 'REVISED: Perspective',
          key: 'revised_perspective',
          note: 'revised_perspective_note',
          view: 'revised_perspective_view',
          load: 'revised_perspective_load',
          require: 'revised_perspective_require',
          required: false
        },
        {
          text: 'Sketch Plan',
          key: 'sketch_plan',
          note: 'sketch_plan_note',
          view: 'sketch_plan_view',
          load: 'sketch_plan_load',
          required: true
        },
        {
          text: 'REVISED: Sketch Plan',
          key: 'revised_sketch_plan',
          note: 'revised_sketch_plan_note',
          view: 'revised_sketch_plan_view',
          load: 'revised_sketch_plan_load',
          require: 'revised_sketch_plan_require',
          required: false
        }
      ],
      buildingItems: [
        {
          text: 'Site Development Plans',
          key: 'side_dev_plan',
          note: 'side_dev_plan_note',
          view: 'side_dev_plan_view',
          load: 'side_dev_plan_load',
          required: true
        },
        {
          text: 'Floor Plans',
          key: 'floor_plan',
          note: 'floor_plan_note',
          view: 'floor_plan_view',
          load: 'floor_plan_load',
          required: true
        },
        {
          text: '4-Elevations',
          key: 'four_elevation',
          note: 'four_elevation_note',
          view: 'four_elevation_view',
          load: 'four_elevation_load',
          required: true
        },
        {
          text: '2-Sections',
          key: 'two_elevation',
          note: 'two_elevation_note',
          view: 'two_elevation_view',
          load: 'two_elevation_load',
          required: true
        },
        {
          text: 'Perspective',
          key: 'perspective',
          note: 'perspective_note',
          view: 'perspective_view',
          load: 'perspective_load',
          required: true
        },
        {
          text: 'Sketch Plan',
          key: 'sketch_plan',
          note: 'sketch_plan_note',
          view: 'sketch_plan_view',
          load: 'sketch_plan_load',
          required: true
        }
      ],
      proofArray: [
        {
          type: ['Certified True Copy of Land Title', 'Notarized Deed of Absolute Sale',
          'Contract of Lease', 'Notarized Authority to Construct', 'Community Association', 'City Housing Clearance', 'Contract of Sell'],
          text: 'Certified True Copy of Land Title',
          key: 'land_title',
          note: 'land_title_note',
          view: 'land_title_view',
          load: 'land_title_load',
          required: true
        },
        {
          type: ['Certified True Copy of Land Title', 'Notarized Deed of Absolute Sale',
          'Contract of Lease', 'Notarized Authority to Construct', 'Community Association', 'City Housing Clearance', 'Contract of Sell'],
          text: 'REVISED: Certified True Copy of Land Title',
          key: 'revised_land_title',
          note: 'revised_land_title_note',
          view: 'revised_land_title_view',
          load: 'revised_land_title_load',
          require: 'revised_land_title_require',
          required: false
        },
        {
          type: ['Notarized Deed of Absolute Sale'],
          text: 'Notarized Deed of Absolute Sale',
          key: 'deed_of_sale',
          note: 'deed_of_sale_note',
          view: 'deed_of_sale_view',
          load: 'deed_of_sale_load',
          required: true
        },
        {
          type: ['Notarized Deed of Absolute Sale'],
          text: 'REVISED: Notarized Deed of Absolute Sale',
          key: 'revised_deed_of_sale',
          note: 'revised_deed_of_sale_note',
          view: 'revised_deed_of_sale_view',
          load: 'revised_deed_of_sale_load',
          require: 'revised_deed_of_sale_require',
          required: false
        },
        {
          type: ['Contract of Lease'],
          text: 'Contract of Lease',
          key: 'lease',
          note: 'lease_note',
          view: 'lease_view',
          load: 'lease_load',
          required: true
        },
        {
          type: ['Contract of Lease'],
          text: 'REVISED: Contract of Lease',
          key: 'revised_lease',
          note: 'revised_lease_note',
          view: 'revised_lease_view',
          load: 'revised_lease_load',
          require: 'revised_lease_load_require',
          required: false
        },
        {
          type: ['Contract of Sell'],
          text: 'Contract of Sell',
          key: 'sell',
          note: 'sell_note',
          view: 'sell_view',
          load: 'sell_load',
          required: true
        },
        {
          type: ['Contract of Sell'],
          text: 'REVISED: Contract of Sell',
          key: 'revised_sell',
          note: 'revised_sell_note',
          view: 'revised_sell_view',
          load: 'revised_sell_load',
          require: 'revised_sell_load_require',
          required: false
        },
        {
          type: ['Notarized Authority to Construct'],
          text: 'Notarized Authority to Construct',
          key: 'construct',
          note: 'construct_note',
          view: 'construct_view',
          load: 'construct_load',
          required: true
        },
        {
          type: ['Notarized Authority to Construct'],
          text: 'REVISED: Notarized Authority to Construct',
          key: 'revised_construct',
          note: 'revised_construct_note',
          view: 'revised_construct_view',
          load: 'revised_construct_load',
          require: 'revised_construct_load_require',
          required: false
        },
        {
          type: ['Community Association'],
          text: 'Certificate of Awardee',
          key: 'certificate_awardee',
          note: 'certificate_awardee_note',
          view: 'certificate_awardee_view',
          load: 'certificate_awardee_load',
          required: true
        },
        {
          type: ['Community Association'],
          text: 'REVISED: Certificate of Awardee',
          key: 'revised_certificate_awardee',
          note: 'revised_certificate_awardee_note',
          view: 'revised_certificate_awardee_view',
          load: 'revised_certificate_awardee_load',
          require: 'revised_certificate_awardee_require',
          required: false
        },
        {
          type: ['Community Association','City Housing Clearance'],
          text: 'Advanced technical specs',
          key: 'advanced_tech_specs',
          note: 'advanced_tech_specs_note',
          view: 'advanced_tech_specs_view',
          load: 'advanced_tech_specs_load',
          required: true
        },
        {
          type: ['Community Association','City Housing Clearance'],
          text: 'REVISED: Advanced technical specs',
          key: 'revised_advanced_tech_specs',
          note: 'revised_advanced_tech_specs_note',
          view: 'revised_advanced_tech_specs_view',
          load: 'revised_advanced_tech_specs_load',
          require: 'revised_advanced_tech_specs_require',
          required: false
        },
        {
          type: ['Community Association','City Housing Clearance'],
          text: 'Advanced technical specs (if not yet subdivide)',
          key: 'advanced_tech_specs_subdivide',
          note: 'advanced_tech_specs_subdivide_note',
          view: 'advanced_tech_specs_subdivide_view',
          load: 'advanced_tech_specs_subdivide_load',
          required: true
        },
        {
          type: ['Community Association','City Housing Clearance'],
          text: 'REVISED: Advanced technical specs (if not yet subdivide)',
          key: 'revised_advanced_tech_specs_subdivide',
          note: 'revised_advanced_tech_specs_subdivide_note',
          view: 'revised_advanced_tech_specs_subdivide_view',
          load: 'revised_advanced_tech_specs_subdivide_load',
          require: 'revised_advanced_tech_specs_subdivide_require',
          required: false
        },
        {
          type: ['City Housing Clearance'],
          text: 'Certificate of Awardee from the city planning',
          key: 'city_planning',
          note: 'city_planning_note',
          view: 'city_planning_view',
          load: 'city_planning_load',
          required: true
        },
        {
          type: ['City Housing Clearance'],
          text: 'REVISED: Certificate of Awardee from the city planning',
          key: 'revised_city_planning',
          note: 'revised_city_planning_note',
          view: 'revised_city_planning_view',
          load: 'revised_city_planning_load',
          require: 'revised_city_planning_require',
          required: false
        },
        {
          type: ['City Housing Clearance'],
          text: 'Certificate of Lot purchase from NHA',
          key: 'nha',
          note: 'nha_note',
          view: 'nha_view',
          load: 'nha_load',
          required: true
        },
        {
          type: ['City Housing Clearance'],
          text: 'REVISED: Certificate of Lot purchase from NHA',
          key: 'revised_nha',
          note: 'revised_nha_note',
          view: 'revised_nha_view',
          load: 'revised_nha_load',
          require: 'revised_nha_require',
          required: false
        },
        {
          type: ['Ancestral Domain'],
          text: 'Memo/Certificate',
          key: 'memo_certificate',
          note: 'memo_certificate_note',
          view: 'memo_certificate_view',
          load: 'memo_certificate_load',
          required: true
        },
        {
          type: ['Ancestral Domain'],
          text: 'REVISED: Memo/Certificate',
          key: 'revised_memo_certificate',
          note: 'revised_memo_certificate_note',
          view: 'revised_memo_certificate_view',
          load: 'revised_memo_certificate_load',
          require: 'revised_memo_certificate_require',
          required: false
        },
        {
          type: ['Ancestral Domain'],
          text: 'Advance technical description',
          key: 'technical_desc',
          note: 'technical_desc_note',
          view: 'technical_desc_view',
          load: 'technical_desc_load',
          required: true
        },
        {
          type: ['Ancestral Domain'],
          text: 'REVISED: Advance technical description',
          key: 'revised_technical_desc',
          note: 'revised_technical_desc_note',
          view: 'revised_technical_desc_view',
          load: 'revised_technical_desc_load',
          require: 'revised_technical_desc_require',
          required: false
        },
        {
          type: ['Certificate of Lot purchase (for mausoleum only)'],
          text: 'Certificate of Lot purchase (for mausoleum only)',
          key: 'lot_purchase',
          note: 'lot_purchase_note',
          view: 'lot_purchase_view',
          load: 'lot_purchase_load',
          required: true
        },
        {
          type: ['Certificate of Lot purchase (for mausoleum only)'],
          text: 'REVISED: Certificate of Lot purchase (for mausoleum only)',
          key: 'revised_lot_purchase',
          note: 'revised_lot_purchase_note',
          view: 'revised_lot_purchase_view',
          load: 'revised_lot_purchase_load',
          require: 'revised_lot_purchase_require',
          required: false
        }
      ],
      proofItems: [
        {
          type: ['Certified True Copy of Land Title', 'Notarized Deed of Absolute Sale',
          'Contract of Lease', 'Notarized Authority to Construct', 'Community Association', 'City Housing Clearance', 'Contract of Sell'],
          text: 'Certified True Copy of Land Title',
          key: 'land_title',
          note: 'land_title_note',
          view: 'land_title_view',
          load: 'land_title_load'
        },
        {
          type: ['Notarized Deed of Absolute Sale'],
          text: 'Notarized Deed of Absolute Sale',
          key: 'deed_of_sale',
          note: 'deed_of_sale_note',
          view: 'deed_of_sale_view',
          load: 'deed_of_sale_load'
        },
        {
          type: ['Contract of Lease'],
          text: 'Contract of Lease',
          key: 'lease',
          note: 'lease_note',
          view: 'lease_view',
          load: 'lease_load'
        },
        {
          type: ['Contract of Sell'],
          text: 'Contract of Sell',
          key: 'sell',
          note: 'sell_note',
          view: 'sell_view',
          load: 'sell_load'
        },
        {
          type: ['Notarized Authority to Construct'],
          text: 'Notarized Authority to Construct',
          key: 'construct',
          note: 'construct_note',
          view: 'construct_view',
          load: 'construct_load'
        },
        {
          type: ['Community Association'],
          text: 'Certificate of Awardee',
          key: 'certificate_awardee',
          note: 'certificate_awardee_note',
          view: 'certificate_awardee_view',
          load: 'certificate_awardee_load'
        },
        {
          type: ['Community Association','City Housing Clearance'],
          text: 'Advanced technical specs',
          key: 'advanced_tech_specs',
          note: 'advanced_tech_specs_note',
          view: 'advanced_tech_specs_view',
          load: 'advanced_tech_specs_load'
        },
        {
          type: ['Community Association','City Housing Clearance'],
          text: 'Advanced technical specs (if not yet subdivide)',
          key: 'advanced_tech_specs_subdivide',
          note: 'advanced_tech_specs_subdivide_note',
          view: 'advanced_tech_specs_subdivide_view',
          load: 'advanced_tech_specs_subdivide_load'
        },
        {
          type: ['City Housing Clearance'],
          text: 'Certificate of Awardee from the city planning',
          key: 'city_planning',
          note: 'city_planning_note',
          view: 'city_planning_view',
          load: 'city_planning_load'
        },
        {
          type: ['City Housing Clearance'],
          text: 'Certificate of Lot purchase from NHA',
          key: 'nha',
          note: 'nha_note',
          view: 'nha_view',
          load: 'nha_load'
        },
        {
          type: ['Ancestral Domain'],
          text: 'Memo/Certificate',
          key: 'memo_certificate',
          note: 'memo_certificate_note',
          view: 'memo_certificate_view',
          load: 'memo_certificate_load'
        },
        {
          type: ['Ancestral Domain'],
          text: 'Advance technical description',
          key: 'technical_desc',
          note: 'technical_desc_note',
          view: 'technical_desc_view',
          load: 'technical_desc_load'
        },
        {
          type: ['Certificate of Lot purchase (for mausoleum only)'],
          text: 'Certificate of Lot purchase (for mausoleum only)',
          key: 'lot_purchase',
          note: 'lot_purchase_note',
          view: 'lot_purchase_view',
          load: 'lot_purchase_load'
        }
      ],
      authorizationItems: [
        {
          type: 'representative',
          text: 'Notarized special power of attorney',
          key: 'power_of_attorney',
          note: 'power_of_attorney_note',
          view: 'power_of_attorney_view',
          load: 'power_of_attorney_load'
        },
        {
          type: 'representative',
          text: 'ID of representative with three signature specimen',
          key: 'rep_signature',
          note: 'rep_signature_note',
          view: 'rep_signature_view',
          load: 'rep_signature_load'
        },
        {
          type: 'owner',
          text: 'ID of applicant with three signature specimen',
          key: 'applicant_signature',
          note: 'applicant_signature_note',
          view: 'applicant_signature_view',
          load: 'applicant_signature_load'
        }
      ],
      companyArray: [
        {
          type: ['Partnership/Corporation', 'Community Association', 'Government'],
          text: 'Notarized Secretary Certificate',
          key: 'secretary',
          note: 'secretary_note',
          view: 'secretary_view',
          load: 'secretary_load',
          required: true
        },
        {
          type: ['Partnership/Corporation', 'Community Association', 'Government'],
          text: 'REVISED: Notarized Secretary Certificate',
          key: 'revised_secretary',
          note: 'revised_secretary_note',
          view: 'revised_secretary_view',
          load: 'revised_secretary_load',
          require: 'revised_secretary_require',
          required: false
        },
        {
          type: ['Partnership/Corporation', 'Community Association', 'Government'],
          text: 'ID of representative with three signature specimen',
          key: 'company_rep_signature',
          note: 'company_rep_signature_note',
          view: 'company_rep_signature_view',
          load: 'company_rep_signature_load',
          required: true
        },
        {
          type: ['Partnership/Corporation', 'Community Association', 'Government'],
          text: 'REVISED: ID of representative with three signature specimen',
          key: 'revised_company_rep_signature',
          note: 'revised_company_rep_signature_note',
          view: 'revised_company_rep_signature_view',
          load: 'revised_company_rep_signature_load',
          require: 'revised_company_rep_signature_require',
          required: false
        },
        {
          type: ['Sole Proprietorship'],
          text: 'ID of applicant/company owner with three signature specimen',
          key: 'company_applicant_signature',
          note: 'company_applicant_signature_note',
          view: 'company_applicant_signature_view',
          load: 'company_applicant_signature_load',
          required: true
        },
        {
          type: ['Sole Proprietorship'],
          text: 'REVISED: ID of applicant/company owner with three signature specimen',
          key: 'revised_company_applicant_signature',
          note: 'revised_company_applicant_signature_note',
          view: 'revised_company_applicant_signature_view',
          load: 'revised_company_applicant_signature_load',
          require: 'revised_company_applicant_signature_require',
          required: false
        }
      ],
      companyItems: [
        {
          type: ['Partnership/Corporation', 'Community Association', 'Government'],
          text: 'Notarized Secretary Certificate',
          key: 'secretary',
          note: 'secretary_note',
          view: 'secretary_view',
          load: 'secretary_load'
        },
        {
          type: ['Partnership/Corporation', 'Community Association', 'Government'],
          text: 'ID of representative with three signature specimen',
          key: 'company_rep_signature',
          note: 'company_rep_signature_note',
          view: 'company_rep_signature_view',
          load: 'company_rep_signature_load'
        },
        {
          type: ['Sole Proprietorship'],
          text: 'ID of applicant/company owner with three signature specimen',
          key: 'company_applicant_signature',
          note: 'company_applicant_signature_note',
          view: 'company_applicant_signature_view',
          load: 'company_applicant_signature_load'
        }
      ]
    }
  }
}