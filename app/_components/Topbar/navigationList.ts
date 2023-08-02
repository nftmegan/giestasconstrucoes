import { Navigation, NavigationEntry } from './navigationTypes'

const NavigationList : Navigation = {
    entries: [
    { title: 'Início', href: '#'},
    { title: 'Empresa', href: '#'},
    { title: 'Serviços', href: '#',
        subentries: [
            { title: 'Pedras', href: '#'},
            { title: 'Construção', href: '#'},
        ]
    },
    { title: 'Produtos', href: '#',
        subentries: [
            { title: 'Granitos', href: '/produtos/granito'},
            { svgUrl: 'silestone-logo.svg', title: 'Silestone', href: '/produtos/silestone'},
            { svgUrl: 'dekton-logo.svg', title: 'Dekton', href: '/produtos/dekton'},
            { svgUrl: 'next.svg', title: 'NEXT', href: '/produtos/next'},
            { svgUrl: 'vercel.svg', title: 'Vercel', href: '/produtos/vercel'}
        ]
    },
    { title: 'Portfolio', href: '#'},
    { title: 'Contactos', href: '#'}
]};

export { NavigationList }

{/* 
const navigation = {
    pages: [
        { name: 'Início', href: '#' },
        { name: 'Empresa', href: '#' },
        { name: 'Produtos', href: '#' },
        { name: 'Serviços', href: '#' },
        { name: 'Portfolio ', href: '#' },
        { name: 'Contactos ', href: '#' }
    ],
}
*/}