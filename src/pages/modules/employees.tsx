import Head from 'next/head'
import ModulesLayout from '../../components/layouts/ModuleLayout'

export default function Employees() {
  return (
    <>
      <Head>
        <title>Employees Module</title>
      </Head>
      <ModulesLayout>
        <div>Employees</div>
      </ModulesLayout>
    </>
  )
}