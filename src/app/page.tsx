export default async function Home() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </main>
  );
}

// Page header
const Header = async function() {
  return (
    <div className="flex justify-center h-[100px] bg-sky-500">
      <div className="w-[1200px] flex justify-bewteen">
        <div>Logo</div>
        <div className="flex justify-bewteen">
          <HeaderContent></HeaderContent>
          <div className="flex">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <button>打开APP</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const HeaderContent = function() {
  return (
    <div className="flex">
      <div>首页</div>
      <div>功能</div>
      <div>案例</div>
      <div>案例</div>
    </div>
  )
}

// Home page main content
const Content = async function() {
  return (
    <div>
      <Carousel></Carousel>
      <Feature></Feature>
      <Advantage></Advantage>
    </div>
  )
}

// Carousel block
const Carousel = function () {
  return (
    <div className="flex justify-center h-[500px] bg-pink-500">
      <div className="w-[1200px] flex">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="">Chrina Chain的大愿景</div>
          <div>
            <div className="">
              发行店铺的专厲积分卡/优惠券
            </div>
            <div className="">
              交换手中的积分/优惠卡
            </div>
            <div className="">
              最贴近大众生活的Web3.0体验
            </div>
          </div>
          <button>了解更多＞</button>
        </div>
        <div className="img"></div>
      </div>
    </div>
  )
}

// Feature block
const Feature = function () {
  return (
    <div className="flex justify-center h-[500px] bg-sky-500">
      <div className="w-[1200px]">
        <div className="flex justify-center">Carina Chain 的項目特点</div>
        <div className="flex justify-between">
          <FeatureBox></FeatureBox>
          <FeatureBox></FeatureBox>
          <FeatureBox></FeatureBox>
        </div>
      </div>
    </div>
  )
}

const FeatureBox = function () {
  return (
    <div className="flex flex-col">
      <div className="img"></div>
      <div className="">Text1</div>
      <div className="">Text2</div>
    </div>
  )
}


// Advantage block
const Advantage = function () {
  return (
    <div className="flex justify-center h-[500px] bg-pink-500">
      <div className="w-[1200px]">
        <div className="flex justify-center">CCarina Chain 的項目伉勢</div>
        <div className="flex justify-between">
          <AdvantageBox></AdvantageBox>
          <AdvantageBox></AdvantageBox>
          <AdvantageBox></AdvantageBox>
          <AdvantageBox></AdvantageBox>
        </div>
      </div>
    </div>
  )
}

const AdvantageBox = function () {
  return (
    <div className="flex flex-col">
      <div className="img"></div>
      <div className="">Text1</div>
      <div className="">Text2</div>
    </div>
  )
}

// Page Footer
const Footer = async function() {
  return (
    <div className="flex justify-center h-[500px] bg-sky-500">
      <div className="w-[1200px]">
        <div className="flex justify-center">CCarina Chain 的項目伉勢</div>
        <div>
          <div>网站地图</div>
          <div className="flex">
            <FooterMapCol></FooterMapCol>
            <FooterMapCol></FooterMapCol>
            <FooterMapCol></FooterMapCol>
            <FooterMapCol></FooterMapCol>
          </div>
          <FooterBtnContent></FooterBtnContent>
        </div>
      </div>
    </div>
  )
}

const FooterMapCol = function() {
  return (
    <div className="flex flex-col">
      <div>功能⬇️</div>
      <div>专属积分</div>
      <div>专属积分</div>
      <div>专属积分</div>
      <div>专属积分</div>
    </div>
  )
}

const FooterBtnContent = function() {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div>Copyright © 2024 Carina Chain Ltd</div>
    </div>
  )
}
