"use client"
import { ClientNavigation } from "./client-navigation"
import type { Locale } from "@/lib/translations"

type Props = {
  locale?: Locale
}

export function Navigation({ locale = "en" }: Props) {
  return <ClientNavigation locale={locale} />
}

// ClientNavigation component should be defined in client-navigation.tsx
// This is a placeholder for the actual implementation
// function ClientNavigation({ locale }: { locale: Locale }) {
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname()
//   const { theme, setTheme } = useTheme()
//   const { t } = useTranslation(locale)

//   const navigation = [
//     { name: t.nav.home, href: `/${locale}` },
//     { name: t.nav.about, href: `/${locale}/about` },
//     { name: t.nav.portfolio, href: `/${locale}/portfolio` },
//     { name: t.nav.blog, href: `/${locale}/blog` },
//     { name: t.nav.contact, href: `/${locale}/contact` },
//   ]

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           <Link href={`/${locale}`} className="font-bold text-xl">
//             {t.home.name}
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={cn(
//                   "text-sm font-medium transition-colors hover:text-primary",
//                   pathname === item.href ? "text-primary" : "text-muted-foreground",
//                 )}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-2">
//             {/* Language Switcher */}
//             <LanguageSwitcher />

//             {/* Theme Toggle */}
//             <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//               <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//               <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//               <span className="sr-only">{t.common.toggleTheme}</span>
//             </Button>

//             {/* Mobile Navigation */}
//             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//               <SheetTrigger asChild className="md:hidden">
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-5 w-5" />
//                   <span className="sr-only">{t.common.toggleMenu}</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-80">
//                 <nav className="flex flex-col space-y-4 mt-8">
//                   {navigation.map((item) => (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       onClick={() => setIsOpen(false)}
//                       className={cn(
//                         "text-lg font-medium transition-colors hover:text-primary",
//                         pathname === item.href ? "text-primary" : "text-muted-foreground",
//                       )}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
// }
