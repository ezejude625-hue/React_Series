const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {today} Groceries List. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
