"use client";

import React, { useState, useCallback } from "react";
import anime from "animejs";
import Image from "next/image";
import NumberFormat from 'react-number-format'
import { Inter, Rubik } from "@next/font/google";
import styles from "./page.module.css";
import {
  Modal,
  useModal,
  Button,
  Card,
  Text,
  Grid,
  Navbar,
  Avatar,
  Input,
} from "@nextui-org/react";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const { setVisible, bindings } = useModal();
  const [nominal, setNominal] = useState("");

  const handleClick = () => {
    if (playing) return;
    setPlaying(!playing);
    anime({
      targets: ".card",
      // scale: [{ value: 1 }, { value: 1.1 }, { value: 1, delay: 250 }],
      rotateY: { value: "+=180" },
      easing: "easeInOutSine",
      duration: 400,
      complete: () => {
        setPlaying(false);
      },
    });
  };

  const handleOnChange = useCallback((event: any) => {
    setNominal(event.target.value);
  }, []);

  const regex = new RegExp(/^(?!0|\.00)[0-9]+(,\d{3})/, "g");

  return (
    <div style={{ height: "100vh" }}>
      <Navbar isBordered variant="floating">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit">
            Pitih
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item>
            <Avatar
              bordered
              as="button"
              color="secondary"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} md={6} sm={6} justify="center" direction="column">
          <div
            className="card"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transformStyle: "preserve-3d",
              position: "relative",
            }}
          >
            <Card
              onClick={handleClick}
              isPressable
              disableAnimation
              variant="flat"
              style={{
                width: 400,
                height: 200,
                backgroundColor: "blue",
                backfaceVisibility: "hidden",
              }}
            >
              <Card.Body>
                <Text style={{ color: "white" }}>Uang Masuk</Text>
              </Card.Body>
            </Card>
            <Card
              onClick={handleClick}
              isPressable
              disableAnimation
              variant="flat"
              style={{
                width: 400,
                height: 200,
                position: "absolute",
                top: 0,
                transform: "rotateY(180deg)",
                backgroundColor: "purple",
              }}
            >
              <Card.Body>
                <Text style={{ color: "white" }}>Uang Keluar</Text>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBlock: 20,
            }}
          >
            <Button color={"default"} flat onPress={() => setVisible(true)}>
              Uang Masuk
            </Button>
            <Button color={"default"} flat>
              Uang Keluar
            </Button>
          </div>
        </Grid>
        <Grid xs={12} md={6} sm={6} justify="center" direction="column">
          <Text>Histori</Text>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
            <Card
              variant="flat"
              isPressable
              style={{
                marginBottom: 10,
                backgroundColor: "#f4f4f4",
                borderColor: "#f4f4f4",
              }}
            >
              <Card.Body>
                <p>Tgl</p>
                <h4>Nama Uang</h4>
              </Card.Body>
            </Card>
          ))}
        </Grid>
      </Grid.Container>
      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Modal with a lot of content
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Input
              animated={false}
              shadow={false}
              placeholder="Nominal"
              type={"tel"}
              labelLeft="Rp."
              size="xl"
              onChange={handleOnChange}
              value={parseInt(nominal).toLocaleString("id")}
            />
          </form>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button
            onPress={() => console.log(typeof nominal, parseInt(nominal))}
          >
            Tambah Uang Masuk
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
