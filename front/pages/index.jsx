import React, { useEffect } from "react";
import Layout from "../components/Layout";
import MagicGrid from "react-magic-grid";
import styled from "styled-components";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { IMG_LIST_REQUEST } from "../reducers/portfolio";

const SaveButton = styled(Button)`
  position: absolute;
  bottom: 5px;
  right: 5px;

  display: none;
`;

const RednerBox = styled.div`
  width: calc(100% / 8);
  margin: 2px;
  border-radius: 10px;
  height: ${(props) => props.height || "200px"};
  min-height: 200px;

  box-shadow: 0px 0px 5px #ccc;

  transition: 0.4s;
  cursor: pointer;

  position: relative;

  &:hover {
    opacity: 0.5;
  }

  &:hover ${SaveButton} {
    display: flex;
  }
`;

const RenderImg = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;

  object-fit: cover;
  border-radius: 10px;
`;

const Home = () => {
  const { imgs } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: IMG_LIST_REQUEST,
    });
  }, []);

  return (
    <Layout>
      {imgs.length === 0 ? null : (
        <MagicGrid items={imgs.length}>
          {imgs.map((item) => {
            const randomHeight = Math.floor(Math.random() * 400) + "px";
            const randomWidth = Math.floor(Math.random() * 230) + "px";

            return (
              <RednerBox
                key={item.id}
                width={randomWidth}
                height={randomHeight}
              >
                <RenderImg src={item.fileURL} alt="image" />
                <SaveButton type="primary">SAVE</SaveButton>
              </RednerBox>
            );
          })}
        </MagicGrid>
      )}
    </Layout>
  );
};

export default Home;
