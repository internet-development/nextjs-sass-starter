import styles from '@system/documents/index.module.scss';

import * as Queries from '@common/queries';
import * as React from 'react';
import * as Utilities from '@common/utilities';

import IntDev from '@system/svg/IntDev';
import InvoiceLayout from '@system/layouts/InvoiceLayout';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import SignatureBox from '@system/documents/SignatureBox';

import { H3, H4, P, Title, Text } from '@system/typography';

function ExampleSOW(props) {
  // NOTE(jimmylee):
  // props.id
  // props.team
  // props.summary
  // props.milestones
  // props.location
  // props.updated_at
  const supplier = {
    name: props.data.supplier_name,
    incorporation: props.data.supplier_incorporation,
    incorporation_address: props.data.supplier_incorporation_address,
    physical_address: props.data.supplier_physical_address,
    shorthand: props.data.supplier_shorthand_name,
    signer: props.data.supplier_signer,
    email: props.data.supplier_email,
    title: props.data.supplier_title,
    amount: props.data.supplier_amount_billed,
    currency: 'USD',
  };

  const client = {
    name: props.data.client_name,
    address: props.data.client_billing_address,
    signer: props.data.client_signer,
    title: props.data.client_title,
    incorporation: props.data.client_incorporation,
    email: props.data.client_email,
    email_legal: props.data.client_email_legal,
    email_invoices: props.data.client_email_invoices,
    contact: props.data.client_contact_name,
    effective_date: props.data.client_effective_date,
    end_date: props.data.client_end_date,
  };

  const services = {
    design: props.data.service_design,
    collaboration: props.data.service_collaboration,
    brand: props.data.service_brand,
    development: props.data.service_development,
    audits: props.data.service_audits,
    maintenance: props.data.service_maintenance,
    launch: props.data.service_launch,
    embedding: props.data.service_embedding,
    property_handoff: props.data.service_property_handoff,
    ownership_handoff: props.data.service_ownership_handoff,
    custom_billing: props.data.service_custom_billing,
    survival: props.data.service_survival,
    confidentiality_and_non_disclosure: props.data.service_confidentiality_and_non_disclosure,
  };

  return (
    <Page
      isNotOpenSourceExample
      title={`wireframes.internet.dev ➝ features ➝ SOW ${props.id}`}
      description={`This Statement of Work (“SOW”) is between ${supplier.name} (“${supplier.shorthand}”) and the client listed below (“Client”).`}
      url={`https://wireframes.internet.dev/examples/features/statement-of-work/${props.id}`}
    >
      <InvoiceLayout>
        <IntDev height="32px" style={{ marginTop: 88 }} />
        <H4 style={{ marginTop: 16 }}>
          {supplier.name}
          <br />
          Statement of Work (SOW) (USA)
        </H4>
        <Text style={{ marginTop: 88 }}>
          This Statement of Work (“SOW”) is between {supplier.name} (“{supplier.shorthand}”) and the client listed below (“Client”).
        </Text>

        <section className={styles.row} style={{ marginTop: 24 }}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}>1. Client</section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>Full Legal Name:</section>
          <section className={styles.remainder}>{client.name}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>Place of incorporation or formation:</section>
          <section className={styles.remainder}>{client.incorporation}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>Registered Office:</section>
          <section className={styles.remainder}>{client.address}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>E-mail address for Legal Notices:</section>
          <section className={styles.remainder}>{client.email_legal}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>E-mail address for Invoices:</section>
          <section className={styles.remainder}>{client.email_invoices}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>Point of Contact Name:</section>
          <section className={styles.remainder}>{client.contact}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>Point of Contact E-mail:</section>
          <section className={styles.remainder}>{client.email}</section>
        </section>

        <section className={styles.row} style={{ marginTop: 24 }}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}>2. {supplier.shorthand}</section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>Full Legal Name:</section>
          <section className={styles.remainder}>{supplier.name}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>Place of incorporation or formation:</section>
          <section className={styles.remainder}>{supplier.incorporation}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>Registered Office:</section>
          <section className={styles.remainder}>{supplier.incorporation_address}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>Physical Office:</section>
          <section className={styles.remainder}>{supplier.physical_address}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>Point of Contact:</section>
          <section className={styles.remainder}>
            {supplier.signer} ({supplier.email})
          </section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}></section>
          <section className={styles.remainder}>
            {supplier.signer} is authorized to sign documents on the behalf of {supplier.name} (“{supplier.shorthand}”).
            <br />
            <br />
            {supplier.signer} is the Work Manager and Point of Contact.
          </section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>Team:</section>
          <section className={styles.remainder}>{props.data.team}</section>
        </section>

        <section className={styles.row} style={{ marginTop: 24 }}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}>3. SOW Term</section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>"SOW Effective Date":</section>
          <section className={styles.remainder}>{client.effective_date}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>"SOW End Date":</section>
          <section className={styles.remainder}>{client.end_date}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}></section>
          <section className={styles.remainder}>
            The SOW Term will begin on the "SOW Effective Date" and end on either:
            <br />
            <br />
            1 ➝ the SOW End Date; or
            <br />2 ➝ the completion by {supplier.name} (“{supplier.shorthand}”) and acceptance by Client.
            <br />
            <br />
            {supplier.shorthand} will maintain continuous service coverage throughout the SOW Term by ensuring that at least one qualified member of its project roster is available
            on a full-time basis, seven days a week. This staffing model is designed to accommodate occasional federal holidays and customary vacation periods taken by individual{' '}
            {supplier.shorthand} personnel without diminishing the overall level of service provided to Client. {supplier.shorthand}’s resource planning and service allocation
            include sufficient buffer capacity to support timely delivery of the contracted services within the agreed period.
            <br />
            <br />
            {supplier.shorthand} will provide {client.name} with reasonable advance notice of any planned vacation or holiday periods that may have a material impact on
            project-specific deliverables.
            <br />
          </section>
        </section>

        <section className={styles.row} style={{ marginTop: 24 }}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}>4. Services and Deliverables</section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>4.1. Background and Project Summary:</section>
          <section className={styles.remainder}>{props.data.summary}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>4.2. Provisioning and Services Location:</section>
          <section className={styles.remainder}>{props.data.location}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>4.3. Major Milestones:</section>
          <section className={styles.remainder}>{props.data.milestones}</section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>4.4. Services and Deliverables:</section>
          <section className={styles.remainder}>
            {supplier.shorthand} will provide the Services and Deliverables described below together with:
            <br />
            <br />
            1 ➝ any other Deliverables that result from delivery of the Services; and <br />
            <br />2 ➝ any additional Services and Deliverables requested by Client in writing (including by e-mail) during the SOW Term in order to meet the Client’s objectives for
            the project: <br />
            <br />
            {supplier.shorthand} will manage and determine iterations and hours for each service outlined below, with the total allocation based on the Major Milestones and Project
            Summary. Services marked with a strikethrough are excluded from this Statement of Work (SOW).
          </section>
        </section>

        <section className={Utilities.classNames(styles.row, !services.design ? styles.inactive : null)}>
          <section className={Utilities.classNames(styles.serviceColumn)}></section>
          <section className={Utilities.classNames(styles.serviceColumn, styles.right)}>4.4.1. Design</section>
          <section className={styles.serviceRemainder}>
            {supplier.shorthand} will create low-fidelity and high-fidelity visual designs based on written and verbal requests from the Client.
          </section>
        </section>

        <section className={Utilities.classNames(styles.row, !services.collaboration ? styles.inactive : null)}>
          <section className={Utilities.classNames(styles.serviceColumn)}></section>
          <section className={Utilities.classNames(styles.serviceColumn, styles.right)}>4.4.2. Collaborative Sessions</section>
          <section className={styles.serviceRemainder}>
            {supplier.shorthand} will hold discovery meetings with the Client to understand project goals and requirements, and to provide recommendations on the technical
            approach, design, and development process. Deliverables will be produced using Figma, GitHub, or other agreed-upon software.
          </section>
        </section>

        <section className={Utilities.classNames(styles.row, !services.brand ? styles.inactive : null)}>
          <section className={Utilities.classNames(styles.serviceColumn)}></section>
          <section className={Utilities.classNames(styles.serviceColumn, styles.right)}>4.4.3. Brand Development</section>
          <section className={styles.serviceRemainder}>
            {supplier.shorthand} will produce materials that assist with the development of a brand history, mission and values, brand logo, color scheme, typefaces, and other
            elements. All brand materials created under this section, including all iterations, concepts, and derivatives, are the exclusive property of {client.name}.
          </section>
        </section>

        <section className={Utilities.classNames(styles.row, !services.development ? styles.inactive : null)}>
          <section className={Utilities.classNames(styles.serviceColumn)}></section>
          <section className={Utilities.classNames(styles.serviceColumn, styles.right)}>4.4.4. Holistic Software Development</section>
          <section className={styles.serviceRemainder}>
            {supplier.shorthand} will use code and services to implement the entire design and provide instructions for Client for how to run and manage the deliverables
            themselves.
          </section>
        </section>

        <section className={Utilities.classNames(styles.row, !services.audits ? styles.inactive : null)}>
          <section className={Utilities.classNames(styles.serviceColumn)}></section>
          <section className={Utilities.classNames(styles.serviceColumn, styles.right)}>4.4.5. Audits</section>
          <section className={styles.serviceRemainder}>
            {supplier.shorthand} will actively involve their community in navigating user experiences and conducting thorough testing for bugs in the deliverables.
          </section>
        </section>

        <section className={Utilities.classNames(styles.row, !services.maintenance ? styles.inactive : null)}>
          <section className={Utilities.classNames(styles.serviceColumn)}></section>
          <section className={Utilities.classNames(styles.serviceColumn, styles.right)}>4.4.6. Maintenance</section>
          <section className={styles.serviceRemainder}>
            {supplier.shorthand} commits to ensuring the seamless operation of web services, supporting a minimum of 5,000 active users monthly and accommodating up to 1,000,000
            page visits each month.
          </section>
        </section>

        <section className={Utilities.classNames(styles.row, !services.launch ? styles.inactive : null)}>
          <section className={Utilities.classNames(styles.serviceColumn)}></section>
          <section className={Utilities.classNames(styles.serviceColumn, styles.right)}>4.4.7. Launch</section>
          <section className={styles.serviceRemainder}>
            {supplier.shorthand} pledges to provide comprehensive support for product launches, ensuring optimal performance and user satisfaction from inception through to market
            introduction.
          </section>
        </section>

        <section className={Utilities.classNames(styles.row, !services.embedding ? styles.inactive : null)}>
          <section className={Utilities.classNames(styles.serviceColumn)}></section>
          <section className={Utilities.classNames(styles.serviceColumn, styles.right)}>4.4.8. Embedding</section>
          <section className={styles.serviceRemainder}>
            {supplier.shorthand} will engage proactively in your preferred communication channels, seamlessly integrating with your team as if we were full-time staff members.
          </section>
        </section>

        {services.custom_billing ? (
          <section className={styles.row} style={{ marginTop: 24 }}>
            <section className={Utilities.classNames(styles.column, styles.shaded)}>5. Payment</section>
            <section className={Utilities.classNames(styles.column, styles.subshaded)}>5.1. Fees (custom)</section>
            <section className={styles.remainder}>{services.custom_billing}</section>
          </section>
        ) : (
          <section className={styles.row} style={{ marginTop: 24 }}>
            <section className={Utilities.classNames(styles.column, styles.shaded)}>5. Payment</section>
            <section className={Utilities.classNames(styles.column, styles.subshaded)}>5.1. Fees</section>
            <section className={styles.remainder}>
              After {supplier.name} (“{supplier.shorthand}”) accepts the completed signed Statement of Work, Client will pay {supplier.shorthand} a flat fee of{' '}
              <strong>
                [{Utilities.formatDollars(supplier.amount)}] [{supplier.currency}]
              </strong>
              .
            </section>
          </section>
        )}

        {supplier.amount ? (
          <section className={styles.row}>
            <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
            <section className={Utilities.classNames(styles.column, styles.subshaded)}>5.2. Maximum Total Cost</section>
            <section className={styles.remainder}>
              Under this SOW, the total aggregate invoiced amount for the Services and Deliverables (including expenses <strong>[but excluding Taxes]</strong>) will not exceed the
              following Maximum Total Cost:{' '}
              <strong>
                [{Utilities.formatDollars(supplier.amount)}] [{supplier.currency}]
              </strong>
              . The parties agree that the Maximum Total Cost does not constitute a minimum volume commitment or spend commitment.
            </section>
          </section>
        ) : null}

        {supplier.amount ? (
          <section className={styles.row}>
            <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
            <section className={Utilities.classNames(styles.column, styles.subshaded)}>5.3. Invoices </section>
            <section className={styles.remainder}>
              <strong>[{supplier.shorthand} will invoice Client for Services and Deliverables after Client’s acceptance.]</strong>
            </section>
          </section>
        ) : null}

        {supplier.amount ? (
          <section className={styles.row}>
            <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
            <section className={Utilities.classNames(styles.column, styles.subshaded)}>5.4. Expenses</section>
            <section className={styles.remainder}>
              <strong>[{supplier.shorthand}’s expenses are included in the fees in SOW Section 5.1 (Fees). No other expenses will be reimbursed.]</strong>
            </section>
          </section>
        ) : null}

        <section className={styles.row} style={{ marginTop: 24 }}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}>6. Changes</section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}>6.1. Background and Project Summary:</section>
          <section className={styles.remainder}>
            If the scope of work changes after signing this SOW, the parties agree to negotiate in good faith to amend this SOW to update expectations, deliverables, timeline, and
            budget. Any amendments to this SOW must be in writing and approved by both parties before work begins on the amended scope.
          </section>
        </section>

        <section className={styles.row}>
          <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
          <section className={Utilities.classNames(styles.column, styles.subshaded)}></section>
          <section className={styles.remainder}>
            Under no circumstances will {supplier.name} (“{supplier.shorthand}”) issue refunds for work performed according to terms of this SOW.
          </section>
        </section>

        {services.ownership_handoff ? (
          <>
            <section className={styles.row} style={{ marginTop: 24 }}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}>7. Intellectual Property & Ownership</section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>7.1. Ownership of Work Product</section>
              <section className={styles.remainder}>
                All work product created by {supplier.name} (“{supplier.shorthand}”) during the SOW Term, including but not limited to code, designs, documentation, concepts,
                methodologies, architectures, brand materials, and any other deliverables or materials created in connection with this engagement, shall be the sole and exclusive
                property of {client.name} upon creation. This includes any work that incorporates, builds upon, or is inspired by {client.name}'s existing intellectual property,
                brand, or business.
              </section>
            </section>
            <section className={styles.row}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>7.2. Assignment</section>
              <section className={styles.remainder}>
                {supplier.name} (“{supplier.shorthand}”) hereby assigns to Parallel Web Systems all rights, title, and interest in and to all intellectual property created under
                this SOW, including all copyrights, patents, trade secrets, and other proprietary rights. {supplier.shorthand} permanently relinquishes any claim, ownership, or
                rights to use, copy, distribute, modify, open-source, or otherwise exploit any work product created under this agreement.
              </section>
            </section>
            <section className={styles.row}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>7.3. No Open Source</section>
              <section className={styles.remainder}>
                {supplier.name} (“{supplier.shorthand}”) shall not release, publish, or contribute any code, designs, documentation, or other materials created under this SOW to
                open-source repositories or public forums without prior written approval from {client.name}.
              </section>
            </section>
            <section className={styles.row}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>7.4. Brand Work</section>
              <section className={styles.remainder}>
                All brand materials, including logos, color schemes, typefaces, brand guidelines, and any derivatives thereof, are the exclusive property of {client.name} and may
                not be used, modified, or referenced by {supplier.name} (“{supplier.shorthand}”) in any other context without written permission from {client.name}.
              </section>
            </section>
          </>
        ) : null}

        {services.property_handoff ? (
          <>
            <section className={styles.row} style={{ marginTop: 24 }}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}>7. Intellectual Property</section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>7.1. Ownership of Work Product</section>
              <section className={styles.remainder}>
                Upon delivery of the final work product as described in this SOW (“Work Product”), {supplier.name} (“{supplier.shorthand}”) hereby assigns to {client.name} all
                rights, title, and interest in and to the specific intellectual property created solely for {client.name} as part of the Work Product. This assignment is limited to
                the copyrights, patents, and any other intellectual property rights directly arising from the Work Product and does not include any broader rights beyond those
                necessary for {client.name} to fully use and benefit from the Work Product.
              </section>
            </section>
            <section className={styles.row}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>7.2. Scope of Assignment</section>
              <section className={styles.remainder}>
                The assignment shall cover the specific code, designs, and assets created by {supplier.name} (“{supplier.shorthand}”) for {client.name} as part of the Work Product
                under this agreement. {supplier.name} (“{supplier.shorthand}”) agrees to permanently relinquish any claim, ownership, or rights to use, copy, distribute, modify, or
                otherwise exploit the assigned Work Product.
              </section>
            </section>
            <section className={styles.row}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>7.3. Right to Derivative Works</section>
              <section className={styles.remainder}>
                {supplier.name} (“{supplier.shorthand}”) retains the right to create derivative works and engage in projects within the same or related domains or technologies,
                provided that no direct reuse of the specific code, documentation, or materials created and assigned to {client.name} takes place. While the Work Product itself is
                assigned to {client.name}, it is acknowledged that similarities in architecture, structure, concepts, or methodologies may occur between the Work Product and other
                works by {supplier.name} (“{supplier.shorthand}”).
              </section>
            </section>
            <section className={styles.row}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>7.4. Moral Rights and Waiver</section>
              <section className={styles.remainder}>
                {supplier.name} (“{supplier.shorthand}”) agrees to waive any moral rights or equivalent rights under applicable laws, to the fullest extent permissible by law, in
                the Work Product, and shall not make any claims or take any actions based on moral rights in relation to the assigned Work Product.
              </section>
            </section>
          </>
        ) : null}

        {services.confidentiality_and_non_disclosure ? (
          <>
            <section className={styles.row} style={{ marginTop: 24 }}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}>8. Confidentiality and Non-Disclosure</section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>8.1. Confidential Information</section>
              <section className={styles.remainder}>
                All information shared by {client.name}, including but not limited to business plans, technical specifications, product roadmaps, customer data, financial
                information, and strategic initiatives, shall be treated as confidential proprietary information.
              </section>
            </section>
            <section className={styles.row}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>8.2. Non-Disclosure</section>
              <section className={styles.remainder}>
                {supplier.name} (“{supplier.shorthand}”) shall not disclose any confidential information or details about this engagement, Client's business, technology, or work
                product to any third party without prior written approval from {client.name}.
              </section>
            </section>
            <section className={styles.row}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>8.3. Publicity Restrictions</section>
              <section className={styles.remainder}>
                {supplier.name} (“{supplier.shorthand}”) shall not: <br />
                Post about this engagement on social media, portfolio sites, or any public forum without written approval from {client.name}. Use {client.name}' name, logo, or
                brand in any marketing materials, case studies, or promotional content without written approval. Discuss or display any work product created for {client.name}{' '}
                publicly without written approval
              </section>
            </section>
            <section className={styles.row}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}></section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>8.4. Return of Materials</section>
              <section className={styles.remainder}>
                Upon completion or termination of this SOW, {supplier.name} (“{supplier.shorthand}”) shall promptly return or destroy all Parallel Web Systems materials, code,
                documents, and confidential information in their possession and provide written certification of such destruction if requested.
              </section>
            </section>
          </>
        ) : null}

        {services.survival ? (
          <>
            <section className={styles.row} style={{ marginTop: 24 }}>
              <section className={Utilities.classNames(styles.column, styles.shaded)}>9. Survival</section>
              <section className={Utilities.classNames(styles.column, styles.subshaded)}>9.1. Survival Duration</section>
              <section className={styles.remainder}>
                Sections 7 (Intellectual Property), 8 (Confidentiality and Non-Disclosure), and 8.4 (Return of Materials) shall survive termination or expiration of this SOW
                indefinitely.
              </section>
            </section>
          </>
        ) : null}

        <Title style={{ marginTop: 48 }}>Notice</Title>
        <Text style={{ marginTop: 16 }}>
          If you are signing on behalf of your company, you represent and warrant that you:
          <br />
          <br />1 ➝ You have full legal authority to bind your company (“{client.name}”) to these terms and conditions
          <br />
          2 ➝ You have read and understood this SOW.
          <br />
          3 ➝ Agree to this SOW on behalf of your company.
          <br />
          <br />
          If you do not have legal authority to bind your company (“{client.name}”), do not sign the signature box below.
        </Text>

        <SignatureBox style={{ marginTop: 64 }} signer={`${supplier.name} (“${supplier.shorthand}”)`} name={supplier.signer} title={supplier.title} date="" />
        <SignatureBox style={{ marginTop: 24 }} signer={`Client`} name={client.signer} title={client.title} date="" />

        <Text style={{ marginTop: 88, opacity: 0.4 }}>
          We will provide the payment details, including bank information and any additional necessary information, in a separate communication. Please review the invoice at your
          earliest convenience.
        </Text>
        <Text style={{ marginTop: 16, opacity: 0.4 }}>If you have any questions or require further details regarding the payment, please feel free to contact us.</Text>
        <Text style={{ marginTop: 16, opacity: 0.4 }}>
          Please be advised that this invoice contains confidential information intended only for the authorized recipient. If you are not the intended recipient, you should not
          disseminate, distribute, or copy this document. We kindly request that you notify the sender immediately by e-mail if you have received this invoice by mistake and delete
          this e-mail from your system. Your cooperation in maintaining the confidentiality of this communication is greatly appreciated.
        </Text>
        <Text style={{ marginTop: 16, opacity: 0.4 }}>Thank you!</Text>
      </InvoiceLayout>
    </Page>
  );
}

export async function getServerSideProps(context) {
  const results = await Queries.onGetDocumentById({ id: context.params.id });

  if (!results) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { ...results.data },
  };
}

export default ExampleSOW;
