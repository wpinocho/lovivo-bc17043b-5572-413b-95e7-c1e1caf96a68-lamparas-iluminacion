import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Lightbulb } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">LuxLamp</h1>
              <p className="text-xs text-muted-foreground">Iluminación Premium</p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-foreground font-medium transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-foreground font-medium transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Cart */}
          {showCart && (
            <Button
              variant="outline"
              size="icon"
              onClick={openCart}
              className="relative border-2 border-foreground hover:bg-foreground hover:text-white transition-all"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          )}
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`gradient-dark text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">LuxLamp</h3>
                <p className="text-sm text-white/70">Iluminación Premium</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Transformamos espacios con lámparas de diseño exclusivo. 
              Calidad premium, envío gratis y garantía extendida en todos nuestros productos.
            </p>
            <SocialLinks />
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg">Navegación</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/blog" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg">Información</h3>
            <div className="space-y-3 text-white/70 text-sm">
              <p>📦 Envío gratis en todos los pedidos</p>
              <p>🛡️ Garantía extendida de 2 años</p>
              <p>💡 LED incluido en todas las lámparas</p>
              <p>⚡ Ahorro energético garantizado</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            &copy; 2024 LuxLamp. Todos los derechos reservados. Iluminación de diseño premium.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}