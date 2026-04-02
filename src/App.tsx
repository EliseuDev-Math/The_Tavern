import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'
import Cart from './components/Cart'

interface MenuItem {
  id: number
  name: string
  category: string
  description: string
  price: number
  image_url: string
}

interface CartItem extends MenuItem {
  quantity: number
}

const MENU_ITEMS: MenuItem[] = [
  // Espetinhos
  { id: 1,  name: 'Espetinho de Carne',        category: 'Espetinhos', description: 'Carne bovina grelhada na brasa com tempero especial da casa.',                  price:  6.00, image_url: '' },
  { id: 2,  name: 'Espetinho Meio da Asa',      category: 'Espetinhos', description: 'Meio da asa de frango temperado e grelhado no carvão.',                         price: 10.00, image_url: '' },
  { id: 3,  name: 'Espetinho de Frango',        category: 'Espetinhos', description: 'Frango marinado, grelhado na brasa com tempero especial da casa.',               price: 10.00, image_url: '' },
  { id: 4,  name: 'Espetinho Coração de Galinha', category: 'Espetinhos', description: 'Coração de galinha temperado e grelhado à perfeição.',                        price:  3.00, image_url: '' },
  { id: 5,  name: 'Linguiça',                   category: 'Espetinhos', description: 'Linguiça artesanal grelhada no carvão.',                                        price:  8.00, image_url: '' },
  { id: 6,  name: 'Miolo de Acem',              category: 'Espetinhos', description: 'Corte nobre grelhado na brasa, suculento e saboroso.',                          price:  9.00, image_url: '' },
  { id: 7,  name: 'Miolo da Paleta',            category: 'Espetinhos', description: 'Paleta temperada e grelhada no ponto certo.',                                   price: 10.00, image_url: '' },
  { id: 8,  name: 'Carne Kafta Medialhão',       category: 'Espetinhos', description: 'Kafta artesanal com temperos árabes, grelhada no carvão.',                     price:  6.00, image_url: '' },
  { id: 9,  name: 'Bife de Vazio com Bacon',    category: 'Espetinhos', description: 'Bife de vazio enrolado em bacon, grelhado na brasa.',                           price: 10.00, image_url: '' },
  { id: 10, name: 'Filé de Frango',             category: 'Espetinhos', description: 'Filé de frango macio e temperado, grelhado no ponto certo.',                    price:  8.00, image_url: '' },
  // Prato Feito
  { id: 11, name: 'Prato Feito Completo',       category: 'Prato Feito', description: 'Arroz, salada e mandioca. Completo e saboroso.',                               price: 20.00, image_url: '' },
  // Hambúrguer
  { id: 12, name: 'Hambúrguer',                 category: 'Lanches',    description: 'Pão de hambúrguer, hambúrguer, queijo, alface, tomate, maionese, ketchup, ovo frito (opcional), bacon e presunto.',  price: 22.00, image_url: '' },
  // Cachorro-Quente
  { id: 13, name: 'Cachorro-Quente',            category: 'Lanches',    description: 'Salsicha, molho de tomate, milho verde, batata palha, queijo ralado, maionese, ketchup, mostarda e ovo.',             price: 12.00, image_url: '' },
  // Bebidas
  { id: 14, name: 'Soda',                       category: 'Bebidas',    description: 'Bebida gelada.',                                                                price:  6.00, image_url: '' },
  { id: 15, name: 'Cerveja Bahama Skol',        category: 'Bebidas',    description: 'Cerveja Bahama Skol gelada.',                                                   price:  4.50, image_url: '' },
  { id: 16, name: 'Água com Gás',               category: 'Bebidas',    description: 'Água com gás gelada.',                                                          price:  4.50, image_url: '' },
  { id: 17, name: 'Água sem Gás',               category: 'Bebidas',    description: 'Água mineral gelada.',                                                          price:  3.00, image_url: '' },
  { id: 18, name: 'Coca-Cola Lata 350ml',       category: 'Bebidas',    description: 'Coca-Cola lata 350ml gelada.',                                                  price:  3.50, image_url: '' },
  { id: 19, name: 'Coca-Cola 310ml',            category: 'Bebidas',    description: 'Coca-Cola garrafa 310ml gelada.',                                               price:  5.50, image_url: '' },
  { id: 20, name: 'Coca-Cola 2L',               category: 'Bebidas',    description: 'Coca-Cola garrafa 2 litros.',                                                   price: 12.00, image_url: '' },
  { id: 21, name: 'Kitubanda 265ml',            category: 'Bebidas',    description: 'Kitubanda lata 265ml gelada.',                                                  price:  4.50, image_url: '' },
  { id: 22, name: 'Kitubanda Refri 2L',         category: 'Bebidas',    description: 'Kitubanda garrafa 2 litros.',                                                   price: 10.00, image_url: '' },
]

function App() {
  const [menuItems] = useState<MenuItem[]>(MENU_ITEMS)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const loading = false

  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.findIndex(cartItem => cartItem.id === item.id)
      if (existing !== -1) {
        return prev.map((cartItem, index) =>
          index === existing ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      } else {
        return [...prev, { ...item, quantity: 1 }]
      }
    })
    setIsCartOpen(true)
    setTimeout(() => setIsCartOpen(false), 800)
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
    setIsCartOpen(false)
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const handleOrderViaWhatsApp = () => {
    if (cartItems.length === 0) return
    const orderText = cartItems.map(item =>
      `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`
    ).join('\n')
    const message = `Olá! Gostaria de fazer o pedido:\n\n${orderText}\n\nTotal: R$ ${cartTotal.toFixed(2)}\n\nEndereço de entrega: `
    window.open(`https://wa.me/5565933053050?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <Menu items={menuItems} loading={loading} onAddToCart={addToCart} />
      <About />
      <Location />
      <Contact />
      <Footer />
      <WhatsappButton />
      <AnimatePresence>
        {isCartOpen && cartItems.length > 0 && (
          <Cart
            items={cartItems}
            total={cartTotal}
            onClose={() => setIsCartOpen(false)}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            onClear={clearCart}
            onOrder={handleOrderViaWhatsApp}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
