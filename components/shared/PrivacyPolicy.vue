<template>
  <v-layout wrap justify-center align-center>
    <v-flex xs12 sm11 md10>
      <v-card flat color="grey lighten-3" class="mb-12 pb-4">
        <h2
          style="text-align: center"
          class="py-2 px-3 primary-text-color text-center align-center"
          >
          PRIVACY POLICY
        </h2>
        <v-card-text class="pa-2 pt-3 text-justify">
          <p style="overflow-wrap: break-word;">
          <p class="text-justify" style="overflow-wrap: break-word;">
            <strong class="primary-text-color">Your privacy is important to us.</strong><br>
            It is the Office of the Building Official's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, https:______________//, and other sites we own and operate.<br>
            This policy is effective as of ______________<br>
          </p>
          <p class="text-justify" style="overflow-wrap: break-word;">
            <strong class="title primary-text-color">Information We Collect</strong><br>
            Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.<br>
            <ol type="A">
              <li><strong class="subtitle-1 font-weight-medium">Log Data</strong><br>
              When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device's Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.
              Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.<br></li>
              <li>
                <strong class="subtitle-1 font-weight-medium">Personal Information and Business Information</strong><br>
                 We may ask for personal information which may include one or more of the following:<br>
              </li>
            </ol>
            <ul>
              <li v-for="(item, index) in items" :key="index">
                 {{ item.title }}
              </li>
            </ul>
          </p>
          <p class="text-justify mb-0" style="overflow-wrap: break-word;">
            <strong class="title primary-text-color">Legitimate Reasons for Processing Your Permit</strong><br>
            <p class="ml-3 text-justify" style="overflow-wrap: break-word;">
              We may collect personal information from you when you do any of the following on our website:<br>
              <ul>
                <li v-for="(info, infoIndex) in personalInfos" :key="infoIndex">
                   {{ info.title }}
                </li>
                <li>
                  <p>
                  Use a mobile device or web browser to access our content.  Contact us via email, social media, or on any similar technologies When you mention us on social media<br>
                </p>
                </li>
              </ul>
            </p>
          </p>
          <p class="ml-3 text-justify" style="overflow-wrap: break-word;">
            We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:<br>
            <ol>
              <li>To contact and communicate with you for internal record keeping and administrative purposes for contact tracing purposes.<br></li>
              <li>Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources.</li>
            </ol>
          </p>
          <p class="text-justify" style="overflow-wrap: break-word;">
            <strong class="title primary-text-color">How Long We Keep Your Personal Information</strong><br>
            We keep your personal information only for as long as necessary for the fulfillment of the purposes expressed in this privacy policy. This period may vary, depending on what we are using your information for. Once your personal and permit information is no longer required, we will delete it or make it anonymous by removing all details that identify you.<br>
            However, if necessary, we may retain your personal and permit information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, as well as scientific, or historical research purposes or statistical purposes.<br>
          </p>

          <p class="text-justify" style="overflow-wrap: break-word;">
            <strong class="title primary-text-color">Security of Your Personal and Business Information</strong><br>
            When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use, or modification.<br>
            All Permit Application information voluntarily provided by you will be shared with other personalities participating in the Permit procedure and/or people with authorize access to collect information for the purposes of application processes, reporting, and others.<br>
            You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services.<br>
            We advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. However, we will do our best to protect the personal information you provide to us and will comply with laws applicable to us in respect of any data breach.<br>
          </p>

          <p class="text-justify" style="overflow-wrap: break-word;">
            <strong class="title primary-text-color">Your Rights</strong><br>
            <p class="ml-3">
               <strong class="subtitle-1 font-weight-medium">Right to reasonable access to personal information</strong><br>
                You retain the right to request details of any personal information we hold about you.<br>

                <strong class="subtitle-1 font-weight-medium">Right to correction of personal information</strong><br>
                If you believe that any information we hold about you is inaccurate, incomplete, outdated, false, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be such.<br>

                <strong class="subtitle-1 font-weight-medium">Right to lodge a complaint</strong><br>
                If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.<br>
            </p>
          </p>

          <p class="text-justify" style="overflow-wrap: break-word;">
            <strong class="title primary-text-color">Controlling Your Personal Information</strong><br>
            You always retain the right to withhold personal and business information from us, with the understanding that your experience of our website may be affected. You may withdraw your consent to the use of personal and business information previously provided. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal and business information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy.<br>

            Personal and business information about you supplied by a third party will be protected in the manner set out in this privacy policy. A third party providing personal information about somebody else presents and warrants to have such other person's consent to provide the personal information to us.<br>

            We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity.<br>
          </p>

          <p class="text-justify" style="overflow-wrap: break-word;">
            <strong class="title primary-text-color">Use of Cookies</strong><br>
            We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.<br>
          </p>

          <p class="text-justify" style="overflow-wrap: break-word;">
            <strong class="title primary-text-color">Limits of Our Policy</strong><br>
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.<br>
          </p>

          <p class="text-justify" style="overflow-wrap: break-word;">
            <strong class="title primary-text-color">Changes to This Policy</strong><br>
            The terms of this privacy policy may be changed at our discretion to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. Any such change will be posted here at the same link by which you are accessing this privacy policy.<br>

            We will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information, as may be required by law.<br>
          </p>

          <p class="text-justify" style="overflow-wrap: break-word;">
            <strong class="title primary-text-color">Contact Us</strong><br>
            For any questions or concerns regarding your privacy, you may contact us using the following details at: obo@davaocity.gov.ph.
          </p>
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import constants from '~/plugins/mixins/constants/index'
  export default {
    mixins: [
      constants,
      Global
    ]
  }
</script>
