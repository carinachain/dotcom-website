import Image from 'next/image'

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </main>
  );
}

// Images path
const img_twitter = '/images/index_topicon_twitter.png'
const img_email = '/images/index_topicon_email.png'
const img_discord = '/images/index_topicon_discord.png'
const img_twitter_rollover = '/images/index_topicon_twitter_rollover.png'
const img_email_rollover = '/images/index_topicon_email_rollover.png'
const img_discord_rollover = '/images/index_topicon_discord_rollover.png'

const img_index_head_bg = '/images/index_head_bg.png'

// Page header
const Header = async function () {
  return (
    <div className="flex justify-center ">
      <div className="w-[1200px] flex justify-between items-center h-full py-[36px]">
        <div>
          <Image
            src="/images/logo.png"
            width={210}
            height={50}
            alt="LOGO"
          />
        </div>
        <div className="flex justify-between flex-1">
          <HeaderContent></HeaderContent>
          <div className="flex gap-x-3">
            <Image
              src={img_discord_rollover}
              width={36}
              height={36}
              alt="Image"
            />
            <Image
              src={img_twitter_rollover}
              width={36}
              height={36}
              alt="Image"
            />
            <Image
              src={img_email_rollover}
              width={36}
              height={36}
              alt="Image"
            />
            <button>打开APP</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const HeaderContent = function () {
  return (
    <div className="flex justify-center items-center flex-1 gap-x-14">
      <div>首页</div>
      <div>功能ᐁ</div>
      <div>关于Carinaᐁ</div>
      <div>语言ᐁ</div>
    </div>
  )
}

// Home page main content
const Content = async function () {
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
    <div className="flex justify-center h-[630px] bg-[url('/images/index_head_bg.png')] bg-no-repeat w-full">
      <div className="w-[1200px] flex justify-between">
        <div className="flex flex-col justify-center gap-y-8 h-full">
          <div className="flex text-3xl">
            <div>
              Chrina Chain的
            </div>
            <div className="text-orange-500">伟大愿景</div>
          </div>
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
        <div className="w-[480px] bg-[url('/images/index_head_image_01.png')] bg-no-repeat mt-[32px]">
        </div>
      </div>
    </div>
  )
}

// Feature block
const Feature = function () {
  return (
    <div className="flex justify-center pb-[60px]">
      <div className="w-[1200px]">
        <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">Carina Chain 的項目特点</div>
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
    <div className="flex flex-col items-center w-[380px] h-[450px] bg-[url('/images/index_function_01.png')] bg-no-repeat">
      <div className="text-white text-2xl mt-[250px] mb-[20px]">筒単流程，易上手</div>
      <div className="mb-[15px]">Line小程序筒単流協</div>
      <div className="mb-[15px]">无需登录个人信息即可创建账户，分秒上手</div>
    </div>
  )
}


// Advantage block
const Advantage = function () {
  return (
    <div className="flex justify-center pb-[160px]">
      <div className="w-[1200px]">
        <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">CCarina Chain 的項目伉勢</div>
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
    <div className="flex flex-col w-[285px] h-[355px] bg-[url('/images/index_advantage_bg.png')] bg-no-repeat pl-[60px]">
      <div className="w-[100px] h-[100px] bg-[url('/images/index_advantage_icon_01.png')] bg-no-repeat"></div>
      <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>低成本</div>
      <div className='pb-[10px]'>无需登录个人信息</div>
      <div className='pb-[10px]'>无需登录个人信息</div>
      <div className='pb-[10px]'>无需登录个人信息</div>
      <div className='pb-[10px]'>无需登录个人信息</div>
    </div>
  )
}

// Page Footer
const Footer = async function () {
  return (
    <div className="flex items-center flex-col bg-gray-300">
      <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">想通辻更多的方式了解 Carina Chain？</div>
      <div className="w-[1200px] h-[400px] bg-[url('/images/index_bottom_bg.png')] bg-no-repeat bg-center relative">
        <div className="p-[50px]">
          <div className='text-orange-500 text-xl pb-[36px]'>网站地图</div>
          <div className="flex text-white">
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

const FooterMapCol = function () {
  return (
    <div className="flex flex-col pr-[70px] gap-y-3">
      <div className='text-gray-500'>功能ᐁ</div>
      <div>专属积分</div>
      <div>专属积分</div>
      <div>专属积分</div>
      <div>专属积分</div>
    </div>
  )
}

const FooterBtnContent = function () {
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-3 absolute bottom-[30px] left-[50px]">
        <Image
          src={img_discord}
          width={36}
          height={36}
          alt="Image"
        />
        <Image
          src={img_twitter}
          width={36}
          height={36}
          alt="Image"
        />
        <Image
          src={img_email}
          width={36}
          height={36}
          alt="Image"
        />
      </div>
      <div className="text-white absolute bottom-[30px] right-[50px]">Copyright © 2024 Carina Chain Ltd</div>
    </div>
  )
}
