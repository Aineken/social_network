import {useState, useEffect, useRef} from "react";

import Dropdown from "./Dropdown";
import {Link} from "react-router-dom";
import {ItemButton, Items} from "./NavbarStyled.js";

const MenuItems = ({items, depthLevel}) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return (
        <Items
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}

        >
            {items.submenu ? (
                <>
                    <ItemButton
                        main={items.main}
                        type="button"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        <span> {items.title}</span>
                        <span>{!items.main&&"→"}</span>
                    </ItemButton>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <Link to={`/category/${items.title}`}>
                    <ItemButton>
                        {items.title}
                    </ItemButton>
                </Link>
            )}
        </Items>
    );
};

export default MenuItems;
