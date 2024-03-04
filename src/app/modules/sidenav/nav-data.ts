import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: '/dashboard/home',
        icon: 'fal fa-home',
        label: 'General'
    },
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
        routeLink: '/dashboard/media',
        icon: 'fal fa-chart-bar',
        label: 'Business Office',
        items: [
            {
                routeLink: '/dashboard/business-office/viewsols',
                label: 'View Sols'
            },
            {
                routeLink: 'coupens/create',
                label: 'View Off Sols'
            }
        ]
    },
    {
        routeLink: 'employee',
        icon: 'fal fa-users',
        label: 'Employee',
        // items: [
        //     {
        //         routeLink: 'coupens/list',
        //         label: 'List Coupens'
        //     },
        //     {
        //         routeLink: 'coupens/create',
        //         label: 'Create Coupens'
        //     }
        // ]
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-user-cog',
        label: 'Users Admin',
        expanded: false,
        items: [
            {
                routeLink: 'coupens/list',
                label: 'Users'
            },
            {
                routeLink: 'coupens/create',
                label: 'View Users'
            }
        ]
    },
    // {
    //     routeLink: 'media',
    //     icon: 'fal fa-camera',
    //     label: 'Module 5'
    // },
    {
        routeLink: 'settings',
        icon: 'fal fa-credit-card',
        label: 'Virtual Card',
        expanded: false,
        items: [
            {
                routeLink: 'settings/profile',
                label: 'Manage'
            },
            {
                routeLink: 'settings/customize',
                label: 'Download Pan'
            }
        ]
    },
];