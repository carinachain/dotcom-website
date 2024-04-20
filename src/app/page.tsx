export default async function Home() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </main>
  );
}

const Header = async function name() {
  return (
    <div>Header</div>
  )
}

const Content = async function name() {
  return (
    <div>Content</div>
  )
}

const Footer = async function name() {
  return (
    <div>Footer</div>
  )
}
