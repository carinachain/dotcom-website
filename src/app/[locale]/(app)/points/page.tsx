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
            <div className="w-[1200px] grid grid-cols-1 md:grid-cols-2 bg-orange-300 h-[500px] rounded-none md:rounded-t-[50px] bg-orange-400/80 relative overflow-hidden">
                <div className="flex justify-center flex-col gap-3 px-10">
                    <div className="text-2xl">发行您商铺的专属积分/优惠券</div>
                    <div className="text-2xl">只需几个歩驟和1枚硬市（500日元）</div>
                    <div className="text-white w-[380px]">
                    满足各类零售业商户的需求，发行商户定制的积分/优惠券<br />
                    建立自己的客户群<br />
                    激励客户再度光顾，提高客户的忠实度<br />
                    帮助您扩大商铺的营业额<br />
                    </div>
                </div>
                <div className="hidden md:block relative">
                    <div className="absolute left-[50px] bottom-0 bg-[url('/images/function_exclusive_head_image_01.png')] bg-cover w-[400px] h-full z-50"></div>
                    <div className="absolute rounded-t-[50px] h-[480px] w-[450px] bg-slate-400/80 left-0 bottom-0 z-10"></div>
                </div>
                <div className="absolute bg-[url('/images/function_common_yen_bg.png')] bg-cover w-[60px] h-[60px] left-[580px] top-[70px] z-50"></div>
                <div className="absolute bg-[url('/images/function_exclusive_yen_bg.png')] bg-cover w-[40px] h-[40px] right-[80px] bottom-[-15px] z-50"></div>
                <div className="absolute bg-black bg-cover w-[30px] h-[30px] left-[550px] top-[50px] rounded-full z-50"></div>
                <div className="absolute bg-black bg-cover w-[30px] h-[30px] left-[80px] bottom-[30px] rounded-full z-50"></div>
                <div className="absolute bg-white bg-cover w-[30px] h-[30px] left-[340px] bottom-[40px] rounded-full z-50"></div>
                <div className="absolute bg-orange-500 bg-cover w-[30px] h-[30px] left-[410px] bottom-[70px] rounded-full z-50"></div>
                <div className="absolute bg-white bg-cover w-[120px] h-[120px] left-[380px] bottom-[-60px] rounded-full z-50"></div>
                <div className="absolute bg-white bg-cover w-[120px] h-[120px] left-[630px] bottom-[160px] rounded-full z-30"></div>
                <div className="absolute bg-white bg-cover w-[80px] h-[80px] left-[110px] top-[-40px] rounded-full z-50"></div>
            </div>
        </div>
    )
}

const Feature = function () {
    return (
        <div className="flex justify-center">
            <div className="w-[1200px] py-[80px]">
                <div className="flex flex-col md:flex-row justify-bewteen">
                    <div className="flex justify-center ml-0 md:ml-[80px] mb-[50px] md:mb-0">
                        <div className="flex justify-center items-center flex-col rounded-full bg-orange-500 w-[250px] h-[250px] border-[20px] text-white">
                            <div className="text-7xl">
                                500
                            </div>
                            <div className="text-2xl">
                                日元
                            </div>
                        </div>
                    </div>
                    <div className="grow flex flex-col items-center justify-center">
                        <div className="text-3xl mb-[40px]">1硬币定制发行，0日元维持</div>
                        <div className="text-gray-500 flex flex-col items-cneter justify-center gap-1">
                            <div className="text-center">设定自己的参数名称/简介等后即可发行专厲积分或优惠券</div>
                            <div className="text-center">发行积分或优惠券仅需1枚500日元硬币</div>
                            <div className="text-center">可按需增发或销毀，只需2日元/次的手续费，无任何维持费用</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-[80px] px-[20px] lg:px-[80px] text-gray-800">
                    <div className="bg-white min-h-[400px] flex flex-col rounded-xl shadow-lg">
                        <div className="bg-[url('/images/function_exclusive_white_pic_01.png')] bg-cover h-[160px] m-[20px] rounded-xl">
                        </div>
                        <div className="m-[20px]">
                            <div className="text-2xl text-orange-500">
                                发放
                            </div>
                            <div>
                                扫描用户的QR码，
                            </div>
                            <div>
                                输入积分数量，指定优惠券，执行发放即可
                            </div>
                            <div>
                                手续费只需2日元/次*
                            </div>
                            <div>
                                POS联动功能上线后，可与POS联动执行
                            </div>
                        </div>
                    </div>
                    <div className="bg-white min-h-[400px] flex flex-col rounded-md shadow-lg">
                        <div className="bg-[url('/images/function_exclusive_white_pic_02.png')] bg-cover bg-blue-100 h-[160px] m-[20px] rounded-md">
                        </div>
                        <div className="m-[20px]">
                            <div className="text-2xl text-orange-500">
                                使用
                            </div>
                            <div>
                                扫描用户的QR码，
                            </div>
                            <div>
                                根据用户账户内的持有积分/优惠券的状況
                                输入积分数量，指定优惠券，执行使用即可
                                手续费只需2日元/次*
                                POS联动功能上线后，可与POS联动执行
                            </div>
                        </div>
                    </div>
                    <div className="bg-white min-h-[400px] flex flex-col rounded-md shadow-lg">
                        <div className="bg-[url('/images/function_exclusive_white_pic_03.png')] bg-cover bg-blue-100 h-[160px] m-[20px] rounded-md">
                        </div>
                        <div className="m-[20px]">
                            <div className="text-2xl text-orange-500">
                                履透明
                            </div>
                            <div>
                                积分/优惠券的发放和使用服历随时免费查洵。
                                履历信息保存在区块链上，保证不会被篡改或
                                消失
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
