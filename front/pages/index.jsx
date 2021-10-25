import React, { useCallback, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import MagicGrid from "react-magic-grid";
import styled from "styled-components";
import { Button, Modal, Form, Input, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  IMG_LIST_REQUEST,
  CREATE_MODAL_TOGGLE,
  IMG_UPLOAD_REQUEST,
  IMG_CREATE_REQUEST,
} from "../reducers/portfolio";

const CreateBtn = styled(Button)`
  position: fixed;
  bottom: 10;
  right: 10px;
`;

const SaveButton = styled(Button)`
  position: absolute;
  bottom: 5px;
  right: 5px;

  display: none;
`;

const PreviewBox = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
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
  const {
    imgs,
    createModal,
    previewPath,
    st_imgLoading,
    st_imgCreateDone,
  } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  const fileRef = useRef();

  const [createForm] = Form.useForm();

  useEffect(() => {
    dispatch({
      type: IMG_LIST_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (st_imgCreateDone) {
      message.success("새로운 이미지가 등록되었습니다.");
      dispatch({
        type: IMG_LIST_REQUEST,
      });
    }
  }, [st_imgCreateDone]);

  const createModalToggle = useCallback(() => {
    dispatch({
      type: CREATE_MODAL_TOGGLE,
    });
  }, [createModal]);

  const uploadBtnClick = useCallback(() => {
    fileRef.current.click();
  });

  const fileChangeHandler = useCallback(
    (e) => {
      const currentFile = e.target.files;

      const formData = new FormData();
      formData.append("img", currentFile[0]);

      dispatch({
        type: IMG_UPLOAD_REQUEST,
        data: formData,
      });
    },
    [fileRef.current]
  );

  const createFormHandler = useCallback(
    (data) => {
      dispatch({
        type: IMG_CREATE_REQUEST,
        data: {
          title: data.title,
          fileURL: previewPath,
        },
      });
    },
    [previewPath]
  );

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
      <CreateBtn type="primary" onClick={createModalToggle}>
        이미지등록
      </CreateBtn>

      <Modal
        title="Create Image"
        visible={createModal}
        footer={null}
        onCancel={createModalToggle}
        width="1100px"
      >
        {previewPath && <PreviewBox src={previewPath} />}
        <PreviewBox />
        <input
          type="file"
          name="img"
          hidden
          ref={fileRef}
          onChange={fileChangeHandler}
        />
        <Button
          size="small"
          type="primary"
          onClick={uploadBtnClick}
          loading={st_imgLoading}
        >
          이미지업로드
        </Button>

        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          form={createForm}
          onFinish={createFormHandler}
        >
          <Form.Item label="TITLE" name="title">
            <Input required />
          </Form.Item>

          <Button type="primary" size="small" htmlType="submit">
            등록
          </Button>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Home;
