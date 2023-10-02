import {
    FiSlack,
    FiArchive,
    FiServer,
    FiDatabase,
    FiWifi,
    FiFigma,
    FiImage,
    FiUser,
    FiPocket,
    FiLayout,
} from 'react-icons/fi';

export const navigations = [
    {
        name: 'home',
        link: '/',
    },
    {
        name: 'product',
        link: '/product',
    },
    {
        name: 'blog',
        link: '/blog',
    },
    {
        name: 'pricing',
        link: '/pricing',
    },
    {
        name: 'contact',
        link: '/contact',
    },
    {
        name: 'about us',
        link: '/about-us',
    },
];

export const navFooter = [
    {
        title: 'product',
        items: [
            'download',
            'pricing',
            'locations',
            'server',
            'countries',
            'blog',
        ],
    },
    {
        title: 'engage',
        items: [
            'geolabs ?',
            'FAQ',
            'tutorials',
            'about us',
            'privacy policy',
            'terms of service',
        ],
    },
    {
        title: 'earn money',
        items: ['affiliate', 'become partner'],
    },
];

export const DataSideLink = [
    {
        item: 'visualization',
        icon: <FiSlack className="text-xl group-hover:text-white transition" />,
    },
    {
        item: 'case',
        icon: (
            <FiArchive className="text-xl group-hover:text-white transition" />
        ),
    },
    {
        item: 'data set',
        icon: (
            <FiServer className="text-xl group-hover:text-white transition" />
        ),
    },
    {
        item: 'data source',
        icon: (
            <FiDatabase className="text-xl group-hover:text-white transition" />
        ),
    },
    {
        item: 'connection',
        icon: <FiWifi className="text-xl group-hover:text-white transition" />,
    },
];

export const AssetSideLink = [
    {
        item: 'icon',
        icon: <FiFigma className="text-xl group-hover:text-white transition" />,
    },
    {
        item: 'image',
        icon: <FiImage className="text-xl group-hover:text-white transition" />,
    },
];

export const AuthSideLink = [
    {
        item: 'account',
        icon: <FiUser className="text-xl group-hover:text-white transition" />,
    },
    {
        item: 'role',
        icon: (
            <FiPocket className="text-xl group-hover:text-white transition" />
        ),
    },
    {
        item: 'workspace',
        icon: (
            <FiLayout className="text-xl group-hover:text-white transition" />
        ),
    },
];
