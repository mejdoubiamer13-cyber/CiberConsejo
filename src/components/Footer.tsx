const Footer = () => {
  return (
    <footer className="bg-espresso text-primary-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} HEADER Peluquería. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
