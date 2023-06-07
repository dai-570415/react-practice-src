import { Children } from '../../types/types';

export const Layout: React.FC<Children> = ({ children }) => {
// export const Layout = ({ children }: Children) => {
    return (
        <div className="container">
            <header>header</header>
                { children }
            <footer>footer</footer>
        </div>
    );
}