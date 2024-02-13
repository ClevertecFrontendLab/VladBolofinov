import 'antd/dist/antd.css';
import './MainPage.scss';
import '../../variables.css';

import { Layout, Menu} from 'antd';
import React, { useState } from 'react';
import Icon, {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import {HeaderContent} from "@pages/main/components/HeaderContent/HeaderContent";
import {MiddleContent} from "@pages/main/components/MiddleContent/MiddleContent";
const { Header, Sider, Content } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const MainLogoSvgLg = () => (
        <svg width="133" height="34" viewBox="0 0 133 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M86.2627 16.1457H90.9234V19.1985H90.9924C91.1996 18.7215 91.5103 18.2445 91.9246 17.7993C92.3043 17.3541 92.7531 17.0043 93.271 16.6863C93.7543 16.3683 94.3067 16.1457 94.8936 15.9549C95.446 15.7959 96.0674 15.7323 96.6888 15.7005C96.9995 15.7005 97.3448 15.7641 97.7591 15.8595V20.0571C97.5174 20.0253 97.2412 19.9935 96.9305 19.9617C96.5853 19.9299 96.2745 19.8981 95.9984 19.8981C95.1007 19.8981 94.3412 20.0571 93.7198 20.3115C93.0984 20.5977 92.5805 20.9793 92.2008 21.4563C91.821 21.9333 91.5448 22.4739 91.4067 23.11C91.2341 23.746 91.165 24.4456 91.165 25.177V32.6606H86.2627V16.1457Z" fill="#10239E"/>
            <path d="M79.6615 22.6012C79.4198 21.4563 79.0055 20.5977 78.4186 19.9935C77.8317 19.4211 76.9341 19.1349 75.7603 19.1031C74.9663 19.1031 74.3103 19.2303 73.7925 19.4847C73.2746 19.7391 72.8603 20.0253 72.5496 20.3751C72.2389 20.7567 72.0318 21.1383 71.8937 21.5199C71.7556 21.9333 71.6865 22.2831 71.6865 22.6012H79.6615ZM71.6865 25.4632C71.7556 26.926 72.1353 28.0072 72.8949 28.6432C73.6199 29.311 74.6901 29.629 76.071 29.629C77.0377 29.629 77.9008 29.4064 78.6258 28.9612C79.3162 28.516 79.7651 28.0072 79.9377 27.4984H84.2531C83.5627 29.47 82.4924 30.901 81.077 31.7278C79.627 32.5864 77.9008 32.9998 75.8984 32.9998C74.4829 32.9998 73.2056 32.809 72.1008 32.3956C70.9615 31.9822 69.9949 31.378 69.2354 30.6148C68.4413 29.8516 67.8199 28.9612 67.4056 27.88C66.9913 26.8306 66.7842 25.654 66.7842 24.382C66.7842 23.1736 66.9913 22.0287 67.4401 20.9475C67.8544 19.8981 68.4758 18.9759 69.3044 18.2127C70.0984 17.4495 71.0651 16.8135 72.1699 16.3683C73.2746 15.9231 74.5175 15.7005 75.8984 15.7005C77.4175 15.7005 78.7293 15.9867 79.8686 16.5273C80.9734 17.0679 81.9055 17.7993 82.6305 18.6897C83.3555 19.6119 83.8734 20.6613 84.2186 21.8061C84.5293 22.9828 84.6329 24.1912 84.5638 25.4632H71.6865Z" fill="#10239E"/>
            <path d="M60.7615 32.6605H55.3068L49.2275 16.1456H54.3716L58.1346 27.3711H58.2037L61.9667 16.1456H66.8346L60.7615 32.6605Z" fill="#10239E"/>
            <path d="M44.3177 22.6012C44.0761 21.4563 43.6618 20.5977 43.0749 19.9935C42.488 19.4211 41.5904 19.1349 40.4166 19.1031C39.6225 19.1031 38.9666 19.2303 38.4487 19.4847C37.9309 19.7391 37.5166 20.0253 37.2059 20.3751C36.8952 20.7567 36.688 21.1383 36.5499 21.5199C36.4118 21.9333 36.3428 22.2831 36.3428 22.6012H44.3177ZM36.3428 25.4632C36.4118 26.926 36.7916 28.0072 37.5511 28.6432C38.2761 29.311 39.3463 29.629 40.7273 29.629C41.6939 29.629 42.557 29.4064 43.282 28.9612C43.9725 28.516 44.4213 28.0072 44.5939 27.4984H48.9094C48.2189 29.47 47.1487 30.901 45.7332 31.7278C44.2832 32.5864 42.557 32.9998 40.5547 32.9998C39.1392 32.9998 37.8618 32.809 36.7571 32.3956C35.6178 31.9822 34.6511 31.378 33.8916 30.6148C33.0976 29.8516 32.4761 28.9612 32.0619 27.88C31.6476 26.8306 31.4404 25.654 31.4404 24.382C31.4404 23.1736 31.6476 22.0287 32.0964 20.9475C32.5107 19.8981 33.1321 18.9759 33.9607 18.2127C34.7547 17.4495 35.7214 16.8135 36.8261 16.3683C37.9309 15.9231 39.1737 15.7005 40.5547 15.7005C42.0737 15.7005 43.3856 15.9867 44.5249 16.5273C45.6296 17.0679 46.5618 17.7993 47.2868 18.6897C48.0118 19.6119 48.5296 20.6613 48.8748 21.8061C49.1856 22.9828 49.2891 24.1912 49.2201 25.4632H36.3428Z" fill="#10239E"/>
            <path d="M24.8569 9.12848H29.6902V32.6606H24.8569V9.12848Z" fill="#10239E"/>
            <path d="M17.5473 17.2246C17.4435 16.6575 17.2358 16.1535 16.9243 15.6809C16.5782 15.2084 16.1975 14.7989 15.713 14.4209C15.2285 14.0743 14.6747 13.7908 14.0517 13.6018C13.4287 13.4128 12.8057 13.3183 12.1482 13.2868C10.9022 13.2868 9.86388 13.5073 9.03324 13.9483C8.16799 14.3894 7.47579 14.9564 6.95663 15.6809C6.40287 16.4055 6.02216 17.2246 5.77989 18.1381C5.53762 19.0832 5.43379 20.0282 5.43379 21.0048C5.43379 21.9499 5.53762 22.895 5.77989 23.777C6.02216 24.6591 6.40287 25.4781 6.95663 26.1712C7.47579 26.8957 8.16799 27.4628 9.03324 27.9038C9.86388 28.3448 10.9022 28.5338 12.1482 28.5338C13.8094 28.5338 15.09 28.0928 16.0245 27.1478C16.959 26.2342 17.5473 25.0056 17.755 23.4935H23.0157C22.8773 24.9111 22.4966 26.1712 21.9428 27.3053C21.3544 28.4393 20.593 29.4159 19.6585 30.2035C18.6895 31.0225 17.5819 31.6211 16.336 32.0306C15.0554 32.4716 13.671 32.6606 12.1482 32.6606C10.2446 32.6606 8.5487 32.3771 7.02585 31.7786C5.50301 31.18 4.25704 30.361 3.21874 29.2899C2.18044 28.2503 1.3844 27.0217 0.830643 25.6041C0.276881 24.1865 0 22.6429 0 21.0048C0 19.3352 0.276881 17.7916 0.830643 16.3425C1.3844 14.8934 2.18044 13.6333 3.21874 12.5622C4.25704 11.5226 5.50301 10.6721 7.02585 10.042C8.5487 9.4435 10.2446 9.15998 12.1482 9.12848C13.4979 9.12848 14.7785 9.31749 15.9899 9.66402C17.2012 10.042 18.2741 10.5461 19.2432 11.2391C20.2123 11.9322 21.0083 12.7512 21.6313 13.7593C22.2543 14.7674 22.635 15.933 22.8081 17.2246H17.5473Z" fill="#10239E"/>
            <path d="M127.752 11.2547H131.995V15.8165H127.752V24.5335C127.752 27.5003 127.936 27.4915 128.305 27.839C128.673 28.1866 129.409 28.3604 130.514 28.3604C130.882 28.4038 131.205 28.3604 131.573 28.3169C131.895 28.3169 132.34 28.0708 132.57 27.839V32.6181C131.995 32.8633 131.343 33.1394 130.698 33.1394C130.008 33.1829 129.363 33.1829 128.719 33.1829C128.676 33.1829 127.947 33.1829 127.64 33.1394C126.893 33.0336 125.781 32.6398 125.09 32.2488C124.707 32.0315 123.709 31.054 123.594 30.6196C123.249 30.0765 123.057 29.0121 123.057 27.8825V15.8165H118.991V11.2547H123.057V3.65173H127.752V11.2547Z" fill="#10239E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M98.7373 15.8165H101.96V32.6615H107.115V15.8165H110.936L110.936 11.2547H107.115L107.115 10.8637C107.115 9.95138 107.299 9.08496 107.667 8.69395C108.036 8.30294 108.68 8.08571 109.601 8.08571C110.429 8.08571 111.212 8.12916 111.994 8.21605V3.65174L110.245 3.65173L108.519 3.65174C106.332 3.65174 104.606 4.70418 103.571 5.71541C102.236 7.01878 101.96 8.51766 101.96 10.4727L101.959 11.2547H98.7373L98.7373 15.8165ZM117.61 17.7716H112.593V32.6615H117.61V17.7716Z" fill="#10239E"/>
            <path d="M117.61 13.5791C117.61 14.9025 116.517 15.9754 115.194 15.9754C113.87 15.9754 112.777 14.9025 112.777 13.5791C112.777 12.2557 113.87 11.1829 115.194 11.1829C116.517 11.1829 117.61 12.2557 117.61 13.5791Z" fill="#40A9FF"/>
        </svg>
    );
    const MainLogoSvgSm = () => (
        <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.2449 7.20682H27.7078V10.9386H24.2449V18.0696C24.2449 20.4966 24.3952 20.4894 24.6957 20.7737C24.9963 21.058 25.5974 21.2002 26.4991 21.2002C26.7997 21.2357 27.0627 21.2002 27.3632 21.1647C27.6262 21.1647 27.9896 20.9633 28.1774 20.7737V24.6832C27.7078 24.8839 27.1754 25.1097 26.6494 25.1097C26.0858 25.1453 25.5599 25.1453 25.0339 25.1453C24.9987 25.1453 24.4038 25.1453 24.1533 25.1097C23.5432 25.0231 22.6358 24.701 22.0723 24.3811C21.7592 24.2034 20.9452 23.4038 20.8513 23.0483C20.5695 22.6041 20.4127 21.7333 20.4127 20.8093V10.9386H17.0942V7.20682H20.4127V0.987122H24.2449V7.20682Z" fill="#10239E" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.563477 10.9386H3.19339V24.7188H7.40129V10.9386H10.5196L10.5196 7.20682H7.40127L7.40129 6.88695C7.40129 6.14059 7.55157 5.43181 7.85213 5.11194C8.15269 4.79207 8.67868 4.61437 9.43008 4.61437C10.1063 4.61437 10.745 4.64991 11.3837 4.72099V0.987126L9.95606 0.987122L8.54718 0.987126C6.76256 0.987126 5.35368 1.84808 4.50835 2.67533C3.41881 3.74156 3.19339 4.96773 3.19339 6.56708L3.19337 7.20682H0.563458L0.563477 10.9386ZM15.9673 12.538H11.8721V24.7188H15.9673V12.538Z" fill="#10239E" />
            <path d="M15.9673 9.1083C15.9673 10.1909 15.0775 11.0686 13.9948 11.0686C12.9122 11.0686 12.0224 10.1909 12.0224 9.10829C12.0224 8.02566 12.9122 7.14801 13.9948 7.14801C15.0775 7.14801 15.9673 8.02566 15.9673 9.1083Z" fill="#40A9FF" />
        </svg>
    )
    const RollbackSvg = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" fill="white" />
            <path d="M3.74621 7.39397V5.86897C3.74621 5.80112 3.66943 5.76183 3.61585 5.80469L0.919425 7.93683C0.90984 7.94439 0.902093 7.95402 0.896766 7.965C0.891439 7.97598 0.888672 7.98802 0.888672 8.00022C0.888672 8.01243 0.891439 8.02447 0.896766 8.03545C0.902093 8.04643 0.90984 8.05606 0.919425 8.06362L3.61585 10.1975C3.66764 10.2386 3.74621 10.2011 3.74621 10.1333V8.60826H10.6664V7.39397H3.74621Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62716 0.929688H14.0474C14.3242 0.929688 14.5474 1.1529 14.5474 1.42969V14.5725C14.5474 14.8493 14.3242 15.0725 14.0474 15.0725H4.62716C4.35038 15.0725 4.12716 14.8493 4.12716 14.5725V11.5725C4.12716 11.5333 4.15931 11.5011 4.19859 11.5011H5.27002C5.30931 11.5011 5.34145 11.5333 5.34145 11.5725V13.8583H13.3331V8.60826V7.39397V2.14397H5.34145V4.42969C5.34145 4.46897 5.30931 4.50112 5.27002 4.50112H4.19859C4.15931 4.50112 4.12716 4.46897 4.12716 4.42969V1.42969C4.12716 1.1529 4.35038 0.929688 4.62716 0.929688Z" fill="black" />
        </svg>
    )
    //удали может из папки логотип клеверфит
    const BtnSvgNotCollapsedLg = () => (
        <svg width="20" height="66" viewBox="0 0 20 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 -1.52588e-05L20 7.99998V58L0 66V-1.52588e-05Z" fill="white" />
            <svg x="3" y="27" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.375 4.90672H12.875C12.9438 4.90672 13 4.85047 13 4.78172V3.90672C13 3.83797 12.9438 3.78172 12.875 3.78172H5.375C5.30625 3.78172 5.25 3.83797 5.25 3.90672V4.78172C5.25 4.85047 5.30625 4.90672 5.375 4.90672ZM5.25 8.09422C5.25 8.16297 5.30625 8.21922 5.375 8.21922H12.875C12.9438 8.21922 13 8.16297 13 8.09422V7.21922C13 7.15047 12.9438 7.09422 12.875 7.09422H5.375C5.30625 7.09422 5.25 7.15047 5.25 7.21922V8.09422ZM13.125 0.500473H0.875C0.80625 0.500473 0.75 0.556723 0.75 0.625473V1.50047C0.75 1.56922 0.80625 1.62547 0.875 1.62547H13.125C13.1938 1.62547 13.25 1.56922 13.25 1.50047V0.625473C13.25 0.556723 13.1938 0.500473 13.125 0.500473ZM13.125 10.3755H0.875C0.80625 10.3755 0.75 10.4317 0.75 10.5005V11.3755C0.75 11.4442 0.80625 11.5005 0.875 11.5005H13.125C13.1938 11.5005 13.25 11.4442 13.25 11.3755V10.5005C13.25 10.4317 13.1938 10.3755 13.125 10.3755ZM0.803125 6.10829L3.24531 8.03172C3.33594 8.1036 3.47031 8.03954 3.47031 7.92391V4.07704C3.47031 3.96141 3.3375 3.89735 3.24531 3.96922L0.803125 5.89266C0.786703 5.90543 0.773415 5.92178 0.764275 5.94046C0.755134 5.95915 0.750382 5.97967 0.750382 6.00047C0.750382 6.02127 0.755134 6.0418 0.764275 6.06048C0.773415 6.07917 0.786703 6.09552 0.803125 6.10829Z" fill="#8C8C8C" />
            </svg>
        </svg>
    )
    const BtnSvgCollapsedLg = () => (
        <svg width="20" height="66" viewBox="0 0 20 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 -1.52588e-05L20 7.99998V58L0 66V-1.52588e-05Z" fill="white" />
            <svg x="3" y="27" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.375 4.90674H12.875C12.9438 4.90674 13 4.85049 13 4.78174V3.90674C13 3.83799 12.9438 3.78174 12.875 3.78174H5.375C5.30625 3.78174 5.25 3.83799 5.25 3.90674V4.78174C5.25 4.85049 5.30625 4.90674 5.375 4.90674ZM5.25 8.09424C5.25 8.16299 5.30625 8.21924 5.375 8.21924H12.875C12.9438 8.21924 13 8.16299 13 8.09424V7.21924C13 7.15049 12.9438 7.09424 12.875 7.09424H5.375C5.30625 7.09424 5.25 7.15049 5.25 7.21924V8.09424ZM13.125 0.500488H0.875C0.80625 0.500488 0.75 0.556738 0.75 0.625488V1.50049C0.75 1.56924 0.80625 1.62549 0.875 1.62549H13.125C13.1938 1.62549 13.25 1.56924 13.25 1.50049V0.625488C13.25 0.556738 13.1938 0.500488 13.125 0.500488ZM13.125 10.3755H0.875C0.80625 10.3755 0.75 10.4317 0.75 10.5005V11.3755C0.75 11.4442 0.80625 11.5005 0.875 11.5005H13.125C13.1938 11.5005 13.25 11.4442 13.25 11.3755V10.5005C13.25 10.4317 13.1938 10.3755 13.125 10.3755ZM1.225 8.0333L3.66719 6.10986C3.68363 6.09694 3.69692 6.08045 3.70606 6.06164C3.71521 6.04283 3.71996 6.02218 3.71996 6.00127C3.71996 5.98036 3.71521 5.95971 3.70606 5.9409C3.69692 5.92209 3.68363 5.9056 3.66719 5.89268L1.225 3.96768C1.13437 3.8958 1 3.95986 1 4.07549V7.92393C0.999992 7.95002 1.00733 7.9756 1.02117 7.99772C1.03501 8.01985 1.05479 8.03763 1.07827 8.04904C1.10174 8.06045 1.12794 8.06502 1.15389 8.06224C1.17984 8.05946 1.20448 8.04943 1.225 8.0333Z" fill="#8C8C8C" />
            </svg>
        </svg>

    )
    const MainLogoIconLg = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={MainLogoSvgLg} {...props} />
    );
    const MainLogoIconSm = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={MainLogoSvgSm} {...props} />
    );
    const RollbackIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={RollbackSvg} {...props} />
    );
    const BtnIconNotCollapsedLg = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={BtnSvgNotCollapsedLg} {...props} />
    );
    const BtnIconCollapsedLg = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={BtnSvgCollapsedLg} {...props} />
    );

    return (
        <Layout className='mainWrapper'>
            <Sider theme={"light"} width={208} trigger={null} collapsible collapsed={collapsed}>
                {(collapsed)
                    ? <MainLogoIconSm style={{ margin: '49px 0 50px 0px', display: 'flex', justifyContent: 'center' }}/>
                    : <MainLogoIconLg style={{ margin: '44px 0 50px 29px' }}/>}
                    <Menu
                        theme="light"
                        mode="inline"
                        items={[
                            {
                                key: '1',
                                icon: <CalendarTwoTone twoToneColor='var(--primary-light-9)' />,
                                label: 'Календарь',
                                style: {padding: '0 16px'},
                            },
                            {
                                key: '2',
                                icon: <HeartFilled style={{ color: 'var(--primary-light-9)' }} />,
                                label: 'Тренировки',
                                style: {padding: '0 16px'}
                            },
                            {
                                key: '3',
                                icon: <TrophyFilled style={{ color: 'var(--primary-light-9)' }}/>,
                                label: 'Достижения',
                                style: {padding: '0 16px'}
                            },
                            {
                                key: '4',
                                icon: <IdcardOutlined style={{ color: 'var(--primary-light-9)' }} />,
                                label: 'Профиль',
                                style: {padding: '0 16px'}
                            },
                            {
                                key: '5',
                                icon: <RollbackIcon />,
                                label: 'Выход',
                                id: 'menu-icon-exit',
                                style: {padding: '0 16px' }
                            }
                        ]}
                    />
            </Sider>
            <Layout className='centerContentWrapper'>
                <Header className={(collapsed) ? 'collapsed-style-header' : ''}>
                    <HeaderContent collapsed={collapsed}/>
                </Header>
                <Content>
                    <button className='btn-trigger' onClick={() => setCollapsed(!collapsed)}>
                        {(collapsed) ? <BtnIconNotCollapsedLg/> : <BtnIconCollapsedLg/>}
                    </button>
                    <MiddleContent collapsed={collapsed}/>
                </Content>
            </Layout>
        </Layout>
    );
};