export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[14px] text-white/65">
            © {year} Apex Global Investigations. All rights reserved.
          </span>
          <span className="text-[14px] text-white/60">
            6632 Telegraph Rd, Suite 245, Bloomfield Hills, MI 48301
          </span>
        </div>
      </div>
    </footer>
  )
}
