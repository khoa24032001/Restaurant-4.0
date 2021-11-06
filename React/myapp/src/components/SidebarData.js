import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Nhà hàng',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Chọn món',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Đặt bàn',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Thanh toán',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />

  },
  {
    title: 'Đơn hàng',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // subNav: [
    //   {
    //     title: 'Reports',
    //     path: '/reports/reports1',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'sub-nav'
    //   },
    //   {
    //     title: 'Reports 2',
    //     path: '/reports/reports2',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'sub-nav'
    //   },
    //   {
    //     title: 'Reports 3',
    //     path: '/reports/reports3',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'Hỗ trợ',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Quản lý',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Nhân sự',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Thực đơn',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Hỗ trợ',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
