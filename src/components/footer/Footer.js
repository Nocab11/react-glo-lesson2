const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-logo"></div>
                <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
                <a href="tel:888"
                   className="footer-phone">tel:888</a>
                <div className="footer-websurfer">
                    <span className="footer-websurfer_build">Сделано</span>
                    <a href="google.com">Ваше имя</a>
                </div>
                <div className="footer-phonelink"><a href="tel:888">+7(962)556-1234</a></div>
            </div>
        </footer>
    );
};

export default Footer;