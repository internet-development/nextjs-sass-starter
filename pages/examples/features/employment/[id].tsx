import * as Queries from '@common/queries';
import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import IntDev from '@system/svg/IntDev';
import InvoiceLayout from '@system/layouts/InvoiceLayout';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import SignatureBox from '@system/documents/SignatureBox';

import { Title, Text } from '@system/typography';

function ExampleEmploymentDocument(props) {
  const employee = {
    title: props.data.employee_title,
    name: props.data.employee_name,
    agreementDate: props.data.employee_agreement_date,
    backDate: props.data.employee_back_date,
    responsibilities: props.data.employee_responsibilities,
    wage: props.data.employee_wage,
    equity: props.data.employee_equity,
    price: props.data.employee_price,
  };

  const manager = {
    title: props.data.manager_title,
    name: props.data.manager_name,
    company: props.data.manager_company,
    shorthand: props.data.manager_shorthand,
    locationCorporation: props.data.manager_location_corporation,
    location: props.data.manager_location,
  };

  const state = {
    consultant: props.data.is_consultant,
  };

  const roleLabel = state.consultant ? 'Consultant' : 'Employee';
  const documentLabel = state.consultant ? 'Consulting Services Agreement' : 'Employment Agreement';

  return (
    <Page
      isNotOpenSourceExample
      title={`wireframes.internet.dev ➝ employment agreement ${props.id}`}
      description={`${props.data.payment_date}`}
      url={`https://wireframes.internet.dev/examples/features/employment/${props.id}`}
    >
      <InvoiceLayout>
        <IntDev height="32px" style={{ marginTop: 88 }} />
        <Title style={{ marginTop: 16 }}>
          {manager.company} {documentLabel}
        </Title>
        <Text style={{ marginTop: 16 }}>
          This {employee.title} {documentLabel} (the "Agreement") is entered into as of {employee.agreementDate} (the “Effective Date”), by and between {manager.company} ("
          {manager.shorthand}"), a company incorporated in {manager.locationCorporation} and with its principal office located in {manager.location} (the "Company"), and{' '}
          {employee.name} (the "{roleLabel}").
        </Text>

        <Title style={{ marginTop: 48 }}>1. Position and Duties</Title>
        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
          The Company hereby employs {employee.name} (the "{roleLabel}") as a {employee.title}. The {roleLabel} will report directly to {manager.name} and shall comply with the
          Company's policies and guidelines. The {roleLabel} agrees to perform the duties and responsibilities as specified by the Company, including but not limited to the
          following:
        </Text>

        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>{employee.responsibilities}</Text>

        <Title style={{ marginTop: 48 }}>2. Compensation</Title>
        {!state.consultant ? (
          <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
            The Company agrees to pay the Employee a salary of {employee.wage} per annum, payable in accordance with the Company's standard payroll practices, which shall comply
            with the minimum wage and overtime laws of both Delaware and Washington.
          </Text>
        ) : (
          <>
            <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
              The Company agrees to pay the Consultant a total fee of {employee.wage} for services rendered under this Agreement over the course of one (1) year. This total fee
              will be paid in four (4) equal quarterly installments. The first installment shall be paid within thirty (30) business days of the acceptance and execution of this
              Agreement. Each subsequent installment shall be paid on the first day of each subsequent quarter during the one-year term of the Agreement.
            </Text>
            <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
              The Consultant acknowledges that they are an independent contractor and are solely responsible for their own taxes, fees, and benefits. The Consultant further agrees
              that they are not entitled to any employee benefits or protections under federal, state, or local employment laws. No deductions for taxes, social security, or other
              withholdings will be made by the Company.
            </Text>
          </>
        )}

        {!state.consultant ? (
          <>
            <Title style={{ marginTop: 48 }}>3. Equity Compensation</Title>
            <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
              The Employee will be granted {employee.equity} of the Company's common stock, subject to a one-year vesting schedule, fully vested after one year of continuous
              employment with the Company.
            </Text>
            <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
              The exercise price for these shares shall be {employee.price} per share. It is understood that these shares can be diluted in subsequent funding rounds, if any, with
              no guarantee against dilution.
            </Text>

            <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
              The vesting schedule for {employee.name} commenced on {employee.backDate}.
            </Text>
          </>
        ) : (
          <>
            <Title style={{ marginTop: 48 }}>3. Bonus</Title>
            <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
              The Consultant shall be eligible for a bonus equivalent to {employee.equity} of the Company’s equity pool (“Bonus”) as of {employee.backDate}, upon completing one
              full year of continuous consulting services under this Agreement, provided the contract remains active and has not been revoked or terminated during that period.
            </Text>
            <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
              The Bonus may be awarded upon the occurrence of a liquidation event (e.g., acquisition, merger, or public offering) or at such time as the Company’s leadership
              determines, at its sole discretion, that it is reasonable to exercise this Bonus.
            </Text>
            <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
              If no liquidation event occurs, the Bonus shall remain subject to Company leadership’s approval before it can be awarded or exercised. The Consultant acknowledges and
              agrees that this Bonus does not represent ownership of shares or rights to equity prior to the leadership’s approval and the occurrence of a qualifying event. No
              deductions for taxes, social security, or other withholdings will be made by the Company.
            </Text>
          </>
        )}

        {state.consultant ? (
          <>
            <Title style={{ marginTop: 48 }}>4. Benefits</Title>
            <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>N/A</Text>
          </>
        ) : (
          <>
            <Title style={{ marginTop: 48 }}>4. Benefits</Title>
            <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
              The Employee will be entitled to participate in any and all benefit plans and programs that the Company may offer to its employees, subject to the terms and
              conditions of such plans and programs. These benefits shall comply with the requirements of {manager.locationCorporation} laws.
            </Text>
          </>
        )}

        <Title style={{ marginTop: 48 }}>5. Confidentiality and Intellectual Property</Title>
        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
          The {roleLabel} agrees to adhere to the following provisions regarding confidentiality and intellectual property:
        </Text>

        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
          <strong>Confidentiality:</strong> {employee.name} ("{roleLabel}") acknowledges that during the course of their employment, they will have access to confidential and
          proprietary information concerning the Company, its customers, and its business operations. The {roleLabel} agrees to maintain the confidentiality of such information and
          not to disclose it to any third party without the prior written consent of the Company. This obligation shall continue indefinitely, even after the termination of this
          Agreement.
        </Text>

        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
          <strong>Intellectual Property:</strong> {employee.name} ("{roleLabel}") shall retain all rights to their own intellectual property created independently of their
          employment with the Company, provided that such intellectual property does not (i) solicit the Company's customers away from the {manager.company} ("{manager.shorthand}")
          services, and (ii) impair the Company's ability to be profitable.
        </Text>

        <Title style={{ marginTop: 48 }}>6. Governing Law</Title>
        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
          This Agreement shall be governed by and construed in accordance with the laws of {manager.locationCorporation}.
        </Text>

        <Title style={{ marginTop: 48 }}>7. Legal Authorization</Title>
        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
          The {roleLabel} represents and warrants that they are fully authorized to work in the United States of America and can provide proof of such authorization through
          appropriate legal documentation upon request. The {roleLabel} agrees to furnish such documentation to the Company as required for compliance with federal and state
          employment laws. The Company will retain copies of this documentation for its legal records in accordance with applicable laws and regulations.
        </Text>

        <Title style={{ marginTop: 48 }}>8. Termination</Title>
        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
          While it is the intention of both parties to establish a long-term and mutually beneficial relationship, this agreement is at-will and may be terminated by either party
          at any time, with or without cause, and with or without notice, so long as it is compliant with the laws of {manager.locationCorporation}. Upon termination of this
          agreement for any reason, the {roleLabel} will be entitled to receive their earned and unpaid salary up to the termination date, in compliance with the laws of{' '}
          {manager.locationCorporation}.
        </Text>

        <Title style={{ marginTop: 48 }}>9. Miscellaneous</Title>
        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
          <strong>Entire Agreement</strong>: This Agreement constitutes the entire understanding between the {roleLabel} and the Company and supersedes all prior discussions,
          agreements, or understandings of any kind.
        </Text>

        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
          <strong>Amendments</strong>: No amendment or modification to this Agreement will be effective unless in writing and signed by both parties.
        </Text>

        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
          <strong>Severability</strong>: If any provision of this Agreement is held to be unenforceable, the remaining provisions shall continue in full force and effect.
        </Text>

        <Text style={{ marginTop: 64, whiteSpace: 'pre-wrap' }}>
          IN WITNESS WHEREOF, the parties hereto have executed this {employee.title} {documentLabel} as of the day and year first written above.
        </Text>

        <SignatureBox style={{ marginTop: 24 }} signer={employee.name} name={employee.name} title={employee.title} />
        <SignatureBox style={{ marginTop: 24 }} signer={manager.name} name={manager.name} title={manager.title} />

        <Text style={{ marginTop: 48, opacity: 0.4 }}>
          Please be advised that this {roleLabel.toLowerCase()} agreement contains confidential information intended only for the authorized recipient. If you are not the intended
          recipient, you should not disseminate, distribute, or copy this document. We kindly request that you notify the sender immediately by e-mail if you have received this{' '}
          {roleLabel.toLowerCase()} agreement by mistake and delete this e-mail from your system. Your cooperation in maintaining the confidentiality of this communication is
          greatly appreciated.
        </Text>
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

export default ExampleEmploymentDocument;
