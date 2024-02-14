import 'antd/dist/antd.css';
import './MainPage.scss';
import '../../variables.css';

import { Layout, Menu, Grid} from 'antd';
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
const { useBreakpoint } = Grid;
const { Header, Sider, Content } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();
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
    const MainLogoSvgShort = () => (
        <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.2449 7.20682H27.7078V10.9386H24.2449V18.0696C24.2449 20.4966 24.3952 20.4894 24.6957 20.7737C24.9963 21.058 25.5974 21.2002 26.4991 21.2002C26.7997 21.2357 27.0627 21.2002 27.3632 21.1647C27.6262 21.1647 27.9896 20.9633 28.1774 20.7737V24.6832C27.7078 24.8839 27.1754 25.1097 26.6494 25.1097C26.0858 25.1453 25.5599 25.1453 25.0339 25.1453C24.9987 25.1453 24.4038 25.1453 24.1533 25.1097C23.5432 25.0231 22.6358 24.701 22.0723 24.3811C21.7592 24.2034 20.9452 23.4038 20.8513 23.0483C20.5695 22.6041 20.4127 21.7333 20.4127 20.8093V10.9386H17.0942V7.20682H20.4127V0.987122H24.2449V7.20682Z" fill="#10239E" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.563477 10.9386H3.19339V24.7188H7.40129V10.9386H10.5196L10.5196 7.20682H7.40127L7.40129 6.88695C7.40129 6.14059 7.55157 5.43181 7.85213 5.11194C8.15269 4.79207 8.67868 4.61437 9.43008 4.61437C10.1063 4.61437 10.745 4.64991 11.3837 4.72099V0.987126L9.95606 0.987122L8.54718 0.987126C6.76256 0.987126 5.35368 1.84808 4.50835 2.67533C3.41881 3.74156 3.19339 4.96773 3.19339 6.56708L3.19337 7.20682H0.563458L0.563477 10.9386ZM15.9673 12.538H11.8721V24.7188H15.9673V12.538Z" fill="#10239E" />
            <path d="M15.9673 9.1083C15.9673 10.1909 15.0775 11.0686 13.9948 11.0686C12.9122 11.0686 12.0224 10.1909 12.0224 9.10829C12.0224 8.02566 12.9122 7.14801 13.9948 7.14801C15.0775 7.14801 15.9673 8.02566 15.9673 9.1083Z" fill="#40A9FF" />
        </svg>
    )
    const MainLogoSvgSm = () => (
        <svg width="72" height="19" viewBox="0 0 72 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.6973 9.31022H49.2203V10.9754H49.2577C49.3699 10.7152 49.5381 10.455 49.7623 10.2122C49.9679 9.96935 50.2109 9.77855 50.4912 9.6051C50.7529 9.43164 51.0519 9.31022 51.3696 9.20615C51.6687 9.11942 52.0051 9.08473 52.3415 9.06738C52.5097 9.06738 52.6966 9.10207 52.9209 9.15411V11.4437C52.79 11.4264 52.6405 11.409 52.4723 11.3917C52.2854 11.3743 52.1172 11.357 51.9677 11.357C51.4818 11.357 51.0706 11.4437 50.7342 11.5825C50.3978 11.7386 50.1174 11.9467 49.9119 12.2069C49.7063 12.4671 49.5568 12.762 49.482 13.1089C49.3885 13.4558 49.3512 13.8374 49.3512 14.2364V18.3184H46.6973V9.31022Z" fill="#10239E"/>
            <path d="M43.1235 12.8314C42.9927 12.2069 42.7684 11.7386 42.4507 11.409C42.133 11.0968 41.647 10.9407 41.0116 10.9234C40.5817 10.9234 40.2266 10.9927 39.9463 11.1315C39.666 11.2703 39.4417 11.4264 39.2735 11.6172C39.1053 11.8253 38.9931 12.0335 38.9184 12.2416C38.8436 12.4671 38.8062 12.6579 38.8062 12.8314H43.1235ZM38.8062 14.3925C38.8436 15.1904 39.0492 15.7801 39.4604 16.127C39.8529 16.4913 40.4322 16.6647 41.1798 16.6647C41.7031 16.6647 42.1704 16.5433 42.5628 16.3005C42.9366 16.0577 43.1796 15.7801 43.273 15.5026H45.6092C45.2354 16.578 44.6561 17.3586 43.8898 17.8096C43.1048 18.2779 42.1704 18.5034 41.0864 18.5034C40.3201 18.5034 39.6286 18.3993 39.0305 18.1738C38.4138 17.9483 37.8905 17.6188 37.4793 17.2025C37.0494 16.7862 36.713 16.3005 36.4888 15.7107C36.2645 15.1383 36.1523 14.4965 36.1523 13.8027C36.1523 13.1436 36.2645 12.5192 36.5074 11.9294C36.7317 11.357 37.0681 10.854 37.5167 10.4377C37.9465 10.0214 38.4698 9.67448 39.0679 9.43164C39.666 9.1888 40.3388 9.06738 41.0864 9.06738C41.9087 9.06738 42.6189 9.22349 43.2357 9.51837C43.8337 9.81324 44.3383 10.2122 44.7308 10.6979C45.1233 11.2009 45.4036 11.7733 45.5905 12.3977C45.7587 13.0395 45.8148 13.6987 45.7774 14.3925H38.8062Z" fill="#10239E"/>
            <path d="M32.8924 18.3184H29.9394L26.6484 9.3103H29.4332L31.4703 15.4333H31.5077L33.5449 9.3103H36.1801L32.8924 18.3184Z" fill="#10239E"/>
            <path d="M23.9907 12.8314C23.8599 12.2069 23.6356 11.7386 23.3179 11.409C23.0002 11.0968 22.5142 10.9407 21.8788 10.9234C21.4489 10.9234 21.0938 10.9927 20.8135 11.1315C20.5332 11.2703 20.3089 11.4264 20.1407 11.6172C19.9725 11.8253 19.8603 12.0335 19.7856 12.2416C19.7108 12.4671 19.6734 12.6579 19.6734 12.8314H23.9907ZM19.6734 14.3925C19.7108 15.1904 19.9164 15.7801 20.3276 16.127C20.72 16.4913 21.2994 16.6647 22.047 16.6647C22.5703 16.6647 23.0375 16.5433 23.43 16.3005C23.8038 16.0577 24.0468 15.7801 24.1402 15.5026H26.4764C26.1026 16.578 25.5232 17.3586 24.757 17.8096C23.972 18.2779 23.0375 18.5034 21.9535 18.5034C21.1873 18.5034 20.4958 18.3993 19.8977 18.1738C19.281 17.9483 18.7577 17.6188 18.3465 17.2025C17.9166 16.7862 17.5802 16.3005 17.3559 15.7107C17.1317 15.1383 17.0195 14.4965 17.0195 13.8027C17.0195 13.1436 17.1317 12.5192 17.3746 11.9294C17.5989 11.357 17.9353 10.854 18.3839 10.4377C18.8137 10.0214 19.337 9.67448 19.9351 9.43164C20.5332 9.1888 21.206 9.06738 21.9535 9.06738C22.7759 9.06738 23.4861 9.22349 24.1028 9.51837C24.7009 9.81324 25.2055 10.2122 25.598 10.6979C25.9905 11.2009 26.2708 11.7733 26.4577 12.3977C26.6259 13.0395 26.682 13.6987 26.6446 14.3925H19.6734Z" fill="#10239E"/>
            <path d="M13.4561 5.48267H16.0726V18.3184H13.4561V5.48267Z" fill="#10239E"/>
            <path d="M9.49833 9.89871C9.44212 9.58941 9.3297 9.31448 9.16108 9.05674C8.97371 8.79899 8.76762 8.57561 8.50531 8.36942C8.243 8.1804 7.94322 8.02576 7.60596 7.92266C7.26871 7.81956 6.93146 7.76801 6.57547 7.75083C5.90096 7.75083 5.33887 7.87111 4.8892 8.11167C4.42079 8.35223 4.04607 8.66153 3.76502 9.05674C3.46524 9.45195 3.25914 9.89871 3.12799 10.397C2.99683 10.9125 2.94062 11.428 2.94062 11.9607C2.94062 12.4762 2.99683 12.9917 3.12799 13.4728C3.25914 13.9539 3.46524 14.4007 3.76502 14.7787C4.04607 15.1739 4.42079 15.4832 4.8892 15.7238C5.33887 15.9643 5.90096 16.0674 6.57547 16.0674C7.47481 16.0674 8.16805 15.8269 8.67393 15.3114C9.17981 14.8131 9.49833 14.1429 9.61075 13.3181H12.4587C12.3837 14.0914 12.1776 14.7787 11.8778 15.3973C11.5593 16.0159 11.1471 16.5485 10.6412 16.9781C10.1166 17.4249 9.51707 17.7514 8.84256 17.9747C8.14932 18.2153 7.39987 18.3184 6.57547 18.3184C5.54497 18.3184 4.62689 18.1637 3.80249 17.8373C2.9781 17.5108 2.30359 17.064 1.7415 16.4798C1.17941 15.9128 0.748476 15.2426 0.448695 14.4694C0.148914 13.6962 -0.000976562 12.8542 -0.000976562 11.9607C-0.000976562 11.05 0.148914 10.208 0.448695 9.41758C0.748476 8.62716 1.17941 7.93984 1.7415 7.35562C2.30359 6.78858 2.9781 6.32463 3.80249 5.98097C4.62689 5.6545 5.54497 5.49985 6.57547 5.48267C7.30618 5.48267 7.99943 5.58576 8.6552 5.77478C9.31097 5.98097 9.89179 6.2559 10.4164 6.63393C10.941 7.01196 11.372 7.45871 11.7092 8.00857C12.0465 8.55843 12.2526 9.1942 12.3462 9.89871H9.49833Z" fill="#10239E"/>
            <path d="M69.1589 6.64221H71.4557V9.13047H69.1589V13.8852C69.1589 15.5034 69.2585 15.4986 69.4579 15.6882C69.6572 15.8778 70.056 15.9726 70.654 15.9726C70.8534 15.9963 71.0278 15.9726 71.2272 15.9489C71.4016 15.9489 71.6426 15.8146 71.7672 15.6882V18.2949C71.4557 18.4287 71.1026 18.5793 70.7537 18.5793C70.3799 18.603 70.031 18.603 69.6822 18.603C69.6588 18.603 69.2642 18.603 69.0981 18.5793C68.6934 18.5216 68.0916 18.3068 67.7178 18.0935C67.5102 17.975 66.9702 17.4418 66.9079 17.2048C66.7211 16.9086 66.6171 16.328 66.6171 15.7119V9.13047H64.416V6.64221H66.6171V2.49512H69.1589V6.64221Z" fill="#10239E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M53.4521 9.13047H55.1965V18.3186H57.9875V9.13047H60.0558L60.0558 6.64221H57.9875L57.9875 6.42894C57.9875 5.93129 58.0872 5.4587 58.2865 5.24542C58.4859 5.03214 58.8347 4.91365 59.3331 4.91365C59.7817 4.91365 60.2053 4.93735 60.6289 4.98474V2.49512L59.682 2.49512L58.7475 2.49512C57.5638 2.49512 56.6294 3.06918 56.0687 3.62076C55.346 4.33169 55.1965 5.14926 55.1965 6.21566L55.1965 6.64221H53.4521L53.4521 9.13047ZM63.6691 10.1969H60.9529V18.3186H63.6691V10.1969Z" fill="#10239E"/>
            <path d="M63.6691 7.91006C63.6691 8.63192 63.0827 9.21711 62.3608 9.21711C61.6389 9.21711 61.0525 8.63192 61.0525 7.91005C61.0525 7.18819 61.6389 6.603 62.3608 6.603C63.0827 6.603 63.6691 7.18819 63.6691 7.91006Z" fill="#40A9FF"/>
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
    const BtnSvgNotCollapsedSm = () => (
        <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L32 5.81818V42.1818L0 48V0Z" fill="white" />
            {/* Выравниваем вторую иконку по центру и смещаем её вверх */}
            <svg x="9" y="21" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.375 4.90672H12.875C12.9438 4.90672 13 4.85047 13 4.78172V3.90672C13 3.83797 12.9438 3.78172 12.875 3.78172H5.375C5.30625 3.78172 5.25 3.83797 5.25 3.90672V4.78172C5.25 4.85047 5.30625 4.90672 5.375 4.90672ZM5.25 8.09422C5.25 8.16297 5.30625 8.21922 5.375 8.21922H12.875C12.9438 8.21922 13 8.16297 13 8.09422V7.21922C13 7.15047 12.9438 7.09422 12.875 7.09422H5.375C5.30625 7.09422 5.25 7.15047 5.25 7.21922V8.09422ZM13.125 0.500473H0.875C0.80625 0.500473 0.75 0.556723 0.75 0.625473V1.50047C0.75 1.56922 0.80625 1.62547 0.875 1.62547H13.125C13.1938 1.62547 13.25 1.56922 13.25 1.50047V0.625473C13.25 0.556723 13.1938 0.500473 13.125 0.500473ZM13.125 10.3755H0.875C0.80625 10.3755 0.75 10.4317 0.75 10.5005V11.3755C0.75 11.4442 0.80625 11.5005 0.875 11.5005H13.125C13.1938 11.5005 13.25 11.4442 13.25 11.3755V10.5005C13.25 10.4317 13.1938 10.3755 13.125 10.3755ZM0.803125 6.10829L3.24531 8.03172C3.33594 8.1036 3.47031 8.03954 3.47031 7.92391V4.07704C3.47031 3.96141 3.3375 3.89735 3.24531 3.96922L0.803125 5.89266C0.786703 5.90543 0.773415 5.92178 0.764275 5.94046C0.755134 5.95915 0.750382 5.97967 0.750382 6.00047C0.750382 6.02127 0.755134 6.0418 0.764275 6.06048C0.773415 6.07917 0.786703 6.09552 0.803125 6.10829Z" fill="#8C8C8C" />
            </svg>
        </svg>
    );
    const BtnSvgCollapsedSm = () => (
        <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L32 5.81818V42.1818L0 48V0Z" fill="white" />
            <svg x="9" y="21" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.375 4.90674H12.875C12.9438 4.90674 13 4.85049 13 4.78174V3.90674C13 3.83799 12.9438 3.78174 12.875 3.78174H5.375C5.30625 3.78174 5.25 3.83799 5.25 3.90674V4.78174C5.25 4.85049 5.30625 4.90674 5.375 4.90674ZM5.25 8.09424C5.25 8.16299 5.30625 8.21924 5.375 8.21924H12.875C12.9438 8.21924 13 8.16299 13 8.09424V7.21924C13 7.15049 12.9438 7.09424 12.875 7.09424H5.375C5.30625 7.09424 5.25 7.15049 5.25 7.21924V8.09424ZM13.125 0.500488H0.875C0.80625 0.500488 0.75 0.556738 0.75 0.625488V1.50049C0.75 1.56924 0.80625 1.62549 0.875 1.62549H13.125C13.1938 1.62549 13.25 1.56924 13.25 1.50049V0.625488C13.25 0.556738 13.1938 0.500488 13.125 0.500488ZM13.125 10.3755H0.875C0.80625 10.3755 0.75 10.4317 0.75 10.5005V11.3755C0.75 11.4442 0.80625 11.5005 0.875 11.5005H13.125C13.1938 11.5005 13.25 11.4442 13.25 11.3755V10.5005C13.25 10.4317 13.1938 10.3755 13.125 10.3755ZM1.225 8.0333L3.66719 6.10986C3.68363 6.09694 3.69692 6.08045 3.70606 6.06164C3.71521 6.04283 3.71996 6.02218 3.71996 6.00127C3.71996 5.98036 3.71521 5.95971 3.70606 5.9409C3.69692 5.92209 3.68363 5.9056 3.66719 5.89268L1.225 3.96768C1.13437 3.8958 1 3.95986 1 4.07549V7.92393C0.999992 7.95002 1.00733 7.9756 1.02117 7.99772C1.03501 8.01985 1.05479 8.03763 1.07827 8.04904C1.10174 8.06045 1.12794 8.06502 1.15389 8.06224C1.17984 8.05946 1.20448 8.04943 1.225 8.0333Z" fill="#8C8C8C" />
            </svg>
        </svg>
    );
    const MainLogoIconLg = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={MainLogoSvgLg} {...props} />
    );
    const MainLogoShortIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={MainLogoSvgShort} {...props} />
    );
    const MainLogoIconSm = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={MainLogoSvgSm} {...props} />
    );
    const RollbackIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={RollbackSvg} {...props} />
    );
    const BtnIconCollapsedLg = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={BtnSvgNotCollapsedLg} {...props} />
    );
    const BtnIconNotCollapsedLg = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={BtnSvgCollapsedLg} {...props} />
    );
    const BtnIconCollapsedSm = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={BtnSvgNotCollapsedSm} {...props} />
    );
    const BtnIconNotCollapsedSm = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={BtnSvgCollapsedSm} {...props} />
    );

    return (
        <Layout className='mainWrapper'>
            {(screens.xs)
                ? <Sider theme={"light"} width={106} trigger={null} collapsible collapsed={collapsed} breakpoint={"xs"} collapsedWidth={0}>
                    <MainLogoIconSm style={{ margin: '16px 0 32px 0', display: 'flex', justifyContent: 'center' }}/>
                    <Menu
                        theme="light"
                        mode="inline"
                        items={[
                            {
                                key: '1',
                                label: 'Календарь',
                                id: 'menu-icon',
                                style: {paddingLeft: '4px'}
                            },
                            {
                                key: '2',
                                label: 'Тренировки',
                                id: 'menu-icon',
                                style: {paddingLeft: '4px'}
                            },
                            {
                                key: '3',
                                label: 'Достижения',
                                id: 'menu-icon',
                                style: {paddingLeft: '4px'}
                            },
                            {
                                key: '4',
                                label: 'Профиль',
                                id: 'menu-icon',
                                style: {paddingLeft: '4px'}
                            },
                            {
                                key: '5',
                                label: 'Выход',
                                id: 'menu-icon-exit',
                                style: {paddingLeft: '32px'}
                            }
                        ]}
                    />
                </Sider>

                : <Sider theme={"light"} width={208} trigger={null} collapsible collapsed={collapsed}>
                    {(collapsed)
                        ? <MainLogoShortIcon style={{ margin: '49px 0 50px 0px', display: 'flex', justifyContent: 'center' }}/>
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
                                icon: <IdcardOutlined style={{ color: 'var(--primary-light-9)' }}/>,
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
            }
            <Layout className='centerContentWrapper'>
                <Header className={(collapsed) ? 'collapsed-style-header' : ''}>
                    <HeaderContent/>
                </Header>
                <Content >
                    {screens.xs ? (
                        <button
                            data-test-id = 'sider-switch-mobile'
                            className={collapsed ? 'btn-trigger-collapsed' : 'btn-trigger'}
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            {collapsed ? <BtnIconNotCollapsedSm /> : <BtnIconCollapsedSm />}
                        </button>
                    ) : (
                        <button
                            data-test-id = 'sider-switch'
                            className={collapsed ? 'btn-trigger-collapsed' : 'btn-trigger'}
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            {collapsed ? <BtnIconNotCollapsedLg /> : <BtnIconCollapsedLg />}
                        </button>
                    )}
                    <MiddleContent collapsed={collapsed} />
                </Content>
            </Layout>
        </Layout>
    );
};

