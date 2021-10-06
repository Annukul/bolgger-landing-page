import React from 'react'

const topPosts = () => {
    return (
        <div className='top_posts'>
            <h2 className='top_posts_heading'>Discover our top picks of the week</h2>
            <div className='top_posts_content'>

                <div className='top_left'>
                    <div class="top_left_post">
                        <div className='top_left_post_img'>
                            <img src='https://www.rollingstone.com/wp-content/uploads/2021/04/campfire_artworkWEB-1.jpg?resize=1800,1200&w=1200' alt='post image' />
                        </div>
                        <div className='top_left_post_text'>
                            <h2 className='post_heading'>The Year That TV Saved Us </h2>
                        </div>
                    </div>
                    <div class="top_left_post">
                        <div className='top_left_post_img'>
                            <img src='https://cdn.aarp.net/content/dam/aarp/money/scams_fraud/2021/04/1140-fraud-factory-office1.imgcache.rev.web.1000.575.jpg' alt='post image' />
                        </div>
                        <div className='top_left_post_text'>
                            <h2 className='post_heading'>Inside an International Tech-Support Scam</h2>
                        </div>
                    </div>
                </div>

                <div className='top_mid'>
                    <div class="top_mid_post">
                        <div className='top_mid_post_img'>
                            <img src='https://media.newyorker.com/photos/6089b3962864275d8a085a2d/master/w_2560%2Cc_limit/210510_r38312.jpg' alt='post image' />
                        </div>
                        <div className='top_mid_post_text'>
                            <h1 className='mid_post_heading'>What We Find When We Get Lost in Proust</h1>
                        </div>
                    </div>
                    <div class="top_mid_post">
                        <div className='top_mid_post_img'>
                            <img src='https://pocket-image-cache.com/direct?resize=w2000&url=https%3A%2F%2Fcms.qz.com%2Fwp-content%2Fuploads%2F2018%2F08%2FTea_bowl_Korea_Joseon_dynasty_16th_century_AD_Mishima-hakeme_type_buncheong_ware_stoneware_with_white_engobe_and_translucent_greenish-gray_glaze_gold_lacquer_-_Ethnological_Museum_Berlin_-_DSC02061.jpg%3Fquality%3D75%26strip%3Dall%26w%3D3200%26h%3D1800' alt='post image' />
                        </div>
                        <div className='top_mid_post_text'>
                            <h1 className='mid_post_heading'>The Japanese Art Principle That Teaches How to Work With Failure</h1>
                        </div>
                    </div>
                </div>

                <div className='top_right'>
                    <div class="top_right_post">
                        <div className='top_right_post_img'>
                            <img src='https://static01.nyt.com/images/2021/05/09/business/09Care-econ1-illo/09Care-econ1-illo-superJumbo.jpg?quality=90&auto=webp' alt='post image' />
                        </div>
                        <div className='top_right_post_text'>
                            <h2 className='post_heading'>Policymakers Used to Ignore Child Care. Then Came the Pandemic.</h2>
                        </div>
                    </div>
                    <div class="top_right_post">
                        <div className='top_right_post_img'>
                            <img src='https://cdn.vox-cdn.com/thumbor/7ljdsFv6fb4Xh3C7CEr2isKkIwU=/0x0:2050x1367/1075x1075/filters:focal(871x1039:1199x1367):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69251325/VRG_ILLO_4576_Self_Shrinking_Car_site.0.jpg' alt='post image' />
                        </div>
                        <div className='top_right_post_text'>
                            <h2 className='post_heading'>The autonomous vehicle world is shrinking — it’s overdue</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default topPosts;
