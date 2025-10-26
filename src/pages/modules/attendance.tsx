import Head from 'next/head'
import ModulesLayout from '../../components/layouts/ModuleLayout'

export default function Attendance() {
  return (
    <>
      <Head>
        <title>Attendance Module</title>
      </Head>
      <ModulesLayout>
        <div>Attendance</div>
      </ModulesLayout>
    </>
  )
}