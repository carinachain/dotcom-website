// import { useTranslations } from 'next-intl';

export default function Points() {
    return (
        <>
            <Carousel></Carousel>
            <Feature></Feature>
        </>
    )
}

const Carousel = function () {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] grid grid-cols-1 md:grid-cols-2 bg-slate-300 h-[500px] rounded-none md:rounded-t-[50px] overflow-hidden">
        <div className="flex justify-center flex-col gap-4 px-14">
          <div className="text-2xl">积分/优惠券互通互换</div>
          <div className="text-2xl">自由灵活，各取所需</div>
          <div className="text-orange-500 w-[400px]">
          账户中的积分/优惠券可以与其他用户进行交换，以物易物让手中的积分/优惠券更自由，更灵活有用同时积分/优惠券的发行商户也扩大了自己的用户群
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-[url('/images/function_interchange_head_images_01.png')] bg-cover w-full h-[550px] -translate-y-10"></div>
        </div>
      </div>
    </div>
  )
}


// Feature block
const Feature = function () {
    // const t = useTranslations('home.feature');
    return (
      <div className="flex justify-center">
        <div className="w-[1200px]">
          <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">Carina Chain 灵活互通互換</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-color-2 mb-[100px]">
            <div className="flex flex-col items-center w-full h-[550px] bg-orange-400 rounded-none md:rounded-[50px]">
              <div className="h-[250px] flex justify-center items-center">
                <div className="h-[160px] w-[160px] bg-[url(/images/function_interchange_icon_01.png)] bg-no-repeat bg-contain"></div>
              </div>
              <div className="text-white text-2xl mb-[20px]">互通</div>
              <div className="px-[30px]">
                <div className="mb-[15px]">用户可以将持有的积分/优惠券赠子其他用户</div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full h-[550px] bg-orange-400 rounded-none md:rounded-[50px]">
              <div className="h-[250px] flex justify-center items-center">
                <div className="h-[160px] w-[160px] bg-[url(/images/function_interchange_icon_01.png)] bg-no-repeat bg-contain"></div>
              </div>
              <div className="text-white text-2xl mb-[20px]">互换（跳蛋市场）</div>
              <div className="px-[30px]">
                <div className="mb-[15px]">用戸可以在跳蚤市場中，将自己戸中中的积分/优惠券上架进行交换，并注明交换条件(希望交换的积分/优惠券）。</div>
                <div className="mb-[15px]">其他用户在市场中看到自己想交换的积分/优惠券后即可以进行交换。</div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full h-[550px] bg-orange-400 rounded-none md:rounded-[50px]">
              <div className="h-[250px] flex justify-center items-center">
                <div className="h-[160px] w-[160px] bg-[url(/images/function_interchange_icon_01.png)] bg-no-repeat bg-contain"></div>
              </div>
              <div className="text-white text-2xl mb-[20px]">兑换</div>
              <div className="px-[30px]">
                <div className="mb-[15px]">两个积分发行商户可以向平台申请，组建由双方积分共同构成的积分兑换池，积分间兑换率，兑换手续费率和兑换上限由商户双方决定。</div>
                <div className="mb-[15px]">用户通过双积分兑换池，可在两种积分间互换，利用兑换池兑换时需要向两积分发行商缴纳一定数量的积分作为兑换手续费。平台交互手续费由兑換用白負担，</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
