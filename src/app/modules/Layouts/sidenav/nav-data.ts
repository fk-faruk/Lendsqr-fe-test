import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    // {
    //     routeLink: '/dashboard/home',
    //     icon: 'fal fa-briefcase',
    //     label: 'Switch Organization'  
    // },

    // {
    //     routeLink: '/dashboard/home',
    //     icon: 'fal fa-home',
    //     label: 'Dashboard'
    // },



    // {
    //     routeLink: '/dashboard/home',
    //     icon: 'fal fa-home',
    //     label: 'Users'
    // },

    // {
    //     routeLink: '/dashboard/home',
    //     icon: 'fal fa-home',
    //     label: 'Guarantors'
    // },
    // {
    //     routeLink: '/dashboard/home',
    //     icon: 'fal fa-home',
    //     label: 'Decisons Models'
    // },
    // {
    //     routeLink: '/dashboard/home',
    //     icon: 'fal fa-home',
    //     label: 'Savings'
    // },
    // {
    //     routeLink: '/dashboard/home',
    //     icon: 'fal fa-home',
    //     label: 'Loan Requests'
    // },
    // {
    //     routeLink: '/dashboard/home',
    //     icon: 'fal fa-home',
    //     label: 'Whitelist'
    // },
    // {
    //     routeLink: '/dashboard/home',
    //     icon: 'fal fa-home',
    //     label: 'Karma'
    // },
    
    // {
    //     routeLink: '/dashboard/media',
    //     icon: 'fal fa-box-open',
    //     label: 'Admin Module',
    //     items: [
    //         {
    //             routeLink: '/dashboard/',
    //             label: 'Level 1.1',
    //             items: [
    //                 {
    //                     routeLink: 'products/level2.1',
    //                     label: 'Level 2.1',
    //                 },
    //                 {
    //                     routeLink: 'products/level2.2',
    //                     label: 'Level 2.2',
    //                     items: [
    //                         {
    //                             routeLink: 'products/level3.1',
    //                             label: 'Level 3.1'
    //                         },
    //                         {
    //                             routeLink: 'products/level3.2',
    //                             label: 'Level 3.2'
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Level 1.2',
    //         }
    //     ]
    // },
    {
        routeLink: '/lendsqr',
        icon: 'assets/icons/briefcase 1.svg',
        label: 'Switch Organization',
        items: [
            {
                icon: 'assets/icons/home 1.svg',
                routeLink: '/dashboard/dashboard',
                label: 'Dashboard '
            },
            // {
            //     routeLink: 'coupens/create',
            //     label: 'View Off Sols'
            // }
        ],
        secondItems: [
            {
                icon: 'assets/icons/user-friends 1.svg',
                routeLink: '/dashboard/users',
                label: 'Users'
            },
            {
                icon: 'assets/icons/users 1.svg',
                routeLink: '/dashboard/guarantors',
                label: 'Guarantors'
            },
            {
                icon: 'assets/icons/sack 1.svg',
                routeLink: '/dashboard/loans',
                label: 'Loans'
            },
            {
                icon: 'assets/icons/handshake-regular 1.svg',
                routeLink: '/dashboard/models',
                label: 'Decision Models'
            },
            {
                icon: 'assets/icons/piggy-bank 1.svg',
                routeLink: '/dashboard/savings',
                label: 'Savings'
            },
            {
                icon: 'assets/icons/Group 104.svg',
                routeLink: '/dashboard/loan_request',
                label: 'Loan Request'
            },
            {
                icon: 'assets/icons/user-check 1.svg',
                routeLink: '/dashboard/whitelist',
                label: 'Whitelist'
            },
            {
                icon: 'assets/icons/user-times 1.svg',
                routeLink: '/dashboard/karma',
                label: 'Karma'
            },
        ],

        thirdItems: [
            {
                icon: 'assets/icons/briefcase 1.svg',
                routeLink: '/dashboard/organization',
                label: 'Organization'
            },
            {
                icon: 'assets/icons/Group 104.svg',
                routeLink: '/dashboard/loan_porduct',
                label: 'Loan Products'
            },
            {
                icon: 'assets/icons/np_bank_148501_000000 1.svg',
                routeLink: '/dashboard/savings',
                label: 'Savings Products'
            },
            {
                icon: 'assets/icons/coins-solid 1.svg',
                routeLink: '/dashboard/fees',
                label: 'Fees and Charges'
            }, 
            {
                icon: 'assets/icons/icon.svg',
                routeLink: '/dashboard/transactions',
                label: 'Transactions'
            },
            {
                icon: 'assets/icons/galaxy 1.svg',
                routeLink: '/dashboard/services',
                label: 'Services'
            },
            {
                icon: 'assets/icons/user-cog 1.svg',
                routeLink: '/dashboard/amount',
                label: 'Service Amount'
            },
            {
                icon: 'assets/icons/scroll 1.svg',
                routeLink: '/dashboard/settlements',
                label: 'Settlements'
            }, 
            {
                icon: 'assets/icons/chart-bar 2.svg',
                routeLink: '/dashboard/reports',
                label: 'Reports'
            }, 
        ],
        fourthItems: [
            {
                icon: 'assets/icons/sliders-h 1.svg',
                routeLink: '/dashboard/preference',
                label: 'Preferences'
            },
            {
                icon: 'assets/icons/badge-percent 1.svg',
                routeLink: '/dashboard/fees',
                label: 'Fees and Prcing'
            }, 
            {
                icon: 'assets/icons/clipboard-list 1.svg',
                routeLink: '/dashboard/audit',
                label: 'Audit Logs'
            }, 
            {
                icon: 'assets/icons/tire 1.svg',
                routeLink: '/dashboard/messages',
                label: 'Systems Messages'
            }, 
        ]
    },
 
    // {
    //     routeLink: 'pages',
    //     icon: 'fal fa-user-cog',
    //     label: 'Users Admin',
    //     expanded: false,
    //     items: [
    //         {
    //             routeLink: 'coupens/list',
    //             label: 'Users'
    //         },
    //         {
    //             routeLink: 'coupens/create',
    //             label: 'View Users'
    //         }
    //     ]
    // },
    // {
    //     routeLink: 'media',
    //     icon: 'fal fa-camera',
    //     label: 'Module 5'
    // },
    // {
    //     routeLink: 'settings',
    //     icon: 'fal fa-credit-card',
    //     label: 'Virtual Card',
    //     expanded: false,
    //     items: [
    //         {
    //             routeLink: 'settings/profile',
    //             label: 'Manage'
    //         },
    //         {
    //             routeLink: 'settings/customize',
    //             label: 'Download Pan'
    //         }
    //     ]
    // },
];