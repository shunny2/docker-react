import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import More from '../../assets/more.png';

import * as S from './styles';
import './index.css';

import { formatDescription, formatTitle, verifyCost } from "../../utils";

export default function Images(props) {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 2;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <S.Content>
                {currentItems.map((game, key) => {
                    return (
                        <S.Card key={key}>
                            <S.Header>
                                <S.H2>{formatTitle(game.name)}</S.H2>
                                <S.H2>{verifyCost(game.cost)}</S.H2>
                                <S.Image src={More} alt='more' />
                            </S.Header>

                            <S.Line></S.Line>

                            <S.Description>{formatDescription(game.description)}</S.Description>

                            <S.Buttons>
                                <Link to={{ pathname: `/view-more/${game.id}` }}>
                                    <S.Button name="btn-view">Vizualizar</S.Button>
                                </Link>
                                <Link to={{ pathname: `/form/edit/${game.id}` }}>
                                    <S.Button name="btn-edit">Editar</S.Button>
                                </Link>
                                <S.Button name="btn-delete" onClick={() => props.delete(game.id) }>Excluir</S.Button>
                            </S.Buttons>
                        </S.Card>
                    );
                })}
            </S.Content>

            <ReactPaginate
                breakLabel="..."
                nextLabel="»"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="«"
                renderOnZeroPageCount={null}
                containerClassName="navigationButtons"
                previousLinkClassName="previousButton"
                nextLinkClassName="nextButton"
                disabledClassName="navigationDisabled"
                activeClassName="pageActive"
                activeLinkClassName="navigationActive"
            />
        </>
    );
}