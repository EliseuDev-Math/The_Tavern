import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-red-500 text-sm font-medium tracking-[3px] mb-3">FALE CONOSCO</div>
          <h2 className="text-6xl font-black tracking-tighter">ENTRE EM CONTATO</h2>
          <p className="mt-4 text-xl text-white/70">Manda uma mensagem pelo WhatsApp!</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 bg-[#1a1a1a] p-10 rounded-3xl border border-white/10 text-center"
        >
          <div className="text-6xl mb-4">💬</div>
          <h3 className="text-2xl font-bold">Fale direto com a gente</h3>
          <p className="text-white/70 text-lg max-w-md mx-auto">
            Tem alguma dúvida, sugestão ou quer fazer um pedido especial? Entre em contato pelo nosso WhatsApp!
          </p>
          <a
            href="https://wa.me/5565933053050?text=Ol%C3%A1%20The%20Tavern!%20Gostaria%20de%20falar%20com%20voc%C3%AAs."
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-2xl transition-all"
          >
            📱 CHAMAR NO WHATSAPP
          </a>
        </motion.div>

        <div className="text-center mt-8 text-sm text-white/50">
          Ou ligue direto: <a href="https://wa.me/5565933053050" className="text-red-400 underline">+55 (65) 9330-5305</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
