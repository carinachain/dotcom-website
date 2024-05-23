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
            <div className="w-[1200px] grid grid-cols-2 bg-slate-300 h-[500px] rounded-t-[50px]">
                <div className="flex justify-center flex-col gap-4 px-10">
                    <div className="text-2xl">积分/优惠券互通互换</div>
                    <div className="text-2xl">自由灵活，各取所需</div>
                    <div className="text-orange-500">
                        账户中的积分/优惠券可以与其他用户进行交换，以物易物让手中的积分/优惠券更自由，更灵活有用同时积分/优惠券的发行商户也扩大了自己的用户群
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

const Feature = function () {
    return (
        <div className="flex justify-center">
            <div className="w-[1200px] py-[80px]">
                <div className="flex justify-bewteen">
                    <div className="flex justify-center items-center flex-col rounded-full bg-orange-500 w-[250px] h-[250px] border-[20px] ml-[80px]">
                        <div>
                            500
                        </div>
                        <div>
                            日元
                        </div>
                    </div>
                    <div className="grow flex flex-col items-center justify-center">
                        <div>1硬币定制发行，0日元维持</div>
                        <div>
                            <div>设定自己的参数名称/简介等后即可发行专厲积分或优惠券</div>
                            <div>发行积分或优惠券仅需1枚500日元硬币</div>
                            <div>可按需增发或销毀，只需2日元/次的手续费，无任何维持费用</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-8 pt-[80px] px-[80px]">
                    <div className="bg-gray-100 min-h-[400px] flex flex-col rounded-md">
                        <div className="bg-blue-100 h-[160px] m-[20px] rounded-md">
                        </div>
                        <div className="m-[20px]">
                            <div>
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
                    <div className="bg-gray-100 min-h-[400px] flex flex-col rounded-md">
                        <div className="bg-blue-100 h-[160px] m-[20px] rounded-md">
                        </div>
                        <div className="m-[20px]">
                            <div>
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
                    <div className="bg-gray-100 min-h-[400px] flex flex-col rounded-md">
                        <div className="bg-blue-100 h-[160px] m-[20px] rounded-md">
                        </div>
                        <div className="m-[20px]">
                            <div>
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
                </div>
            </div>
        </div>
    )
}
