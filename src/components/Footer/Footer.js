import React from 'react'
import {LoginIcon,UserIcon,LinkIcon, LocationMarkerIcon, PhoneIcon, InboxIcon} from '@heroicons/react/outline'
import Logo from '../../assets/logo.png'
import css from './Footer.module.css'

function Footer() {
  return (
    <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter}>
            <div className={css.log}>
                <img src={Logo} alt="" width={50} />
                <span>amazon</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} color={'black'}/>
                        <span>INDIA.</span>
                    </span>

                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon} />
                        <span>324-553-332</span>
                    </span>

                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon} />
                        <span>support@gmail.com</span>
                    </span>
                </div>

            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon} color={'black'}/>
                        <span>Sign in </span>
                    </span>
                </div>

            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UserIcon className={css.icon} color={'black'}/>
                        <span>About us</span>
                    </span>
                </div>

            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon} color={'black'}/>
                        <span>Resources</span>
                    </span>
                </div>

            </div>

        


        </div>


    </div>
  )
}

export default Footer