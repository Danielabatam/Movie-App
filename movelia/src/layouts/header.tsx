import {Container} from "../components/container";
import React, {useEffect, useRef, useState} from "react";
import {Link, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {mergeClassName} from "../utils";
import {IoIosSearch} from "react-icons/io"

const MENU_CLASS = `
    p-1.5
    hover:bg-primary
    rounded-md
`
const MENU_ACTIVE = `
    bg-primary
`

export const Header = () => {
    const location = useLocation()
    const [params, _] = useSearchParams()
    const navigate = useNavigate()

    const [pathname, setPathName] = useState('')
    const pathnameRef = useRef('')

    const [keyword,setKeyword] = useState ('')
    const [isSearch, setSearchFocus] = useState(false)
    const searchRef = useRef<HTMLInputElement>(null)

    const goToSearchPage = () => {
        if (keyword) {
            navigate(`/search?q=${keyword}`)
            setSearchFocus(false)
            searchRef.current?.blur()
        }
    }

    const initKeyword = () => {
        if (pathnameRef.current === '/search') {
            setKeyword(params.get('q') || '')
        } else {
            setKeyword('')
        }
    }

    const onWindowClick = () => {
        setSearchFocus(false)
        initKeyword()
    }

    const getMenuClass = (path: string) => {
        if (path === pathname) {
            return mergeClassName(MENU_CLASS, MENU_ACTIVE)
        }
        return mergeClassName(MENU_CLASS, '')
    }
    useEffect(() => {
        setPathName(location.pathname)
    }, [location.pathname])

    useEffect(() => {
        window.addEventListener('click',() => onWindowClick())
    }, [])

    return (
        <div className={"bg-header"}>
            <Container className={"flex justify-between"}>
                {/*brand & menu*/}
                <div className={"flex items-center flex-1 gap-6"}>
                    {/*brand*/}
                    <h1 className={"text-2xl font-semibold"}>
                        <Link to={"/"}>Movelia</Link>
                    </h1>
                    {/*menu*/}
                    <div className='
                        pt-0.5
                        flex
                        items-center
                        gap-1.5
                    '>
                        <Link className={getMenuClass('/movies')} to={"/movies"}>Movies</Link>
                        <Link className={getMenuClass('/tv')} to={"/tv"}>TV</Link>
                    </div>
                </div>

                {/*search*/}
                <div className="
                    border-b-[1.5px]
                    border-white
                    flex
                    items-center
                    p-1
                    flex-[0.5]
                    focus-within:border-primary
                ">
                    <input
                        onClick={e => {
                            e.stopPropagation()
                            setSearchFocus(true)
                        }}
                        onKeyDown={e => e.key === "Enter" ? goToSearchPage() : ''}
                        // onInput={e => setKeyword(e.currentTarget.validationMessage)}
                        onInput={e => setKeyword(e.currentTarget.value)}
                        value={keyword}
                        type={"text"} className={"bg-transparent outline-0 flex-1"}
                        placeholder={"search..."}
                    ></input>
                    <IoIosSearch size={20}></IoIosSearch>
                </div>
            </Container>
        </div>
    )
}