// Import React
import React, { Component } from "react";

// Import Spectacle Core tags
import {
	BlockQuote,
	Deck,
	Heading,
	ListItem,
	List,
	Slide,
	Image,
	Text,
	Cite,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
	eslint: require("../assets/eslint.png"),
	ccg: require("../assets/code-quality-gates.png"),
	unit: require("../assets/unit.png"),
	piramyd: require("../assets/piramyd.png"),
	tax: require("../assets/tax.png"),
};

preloader(images);

const theme = createTheme(
	{
		primary: "#fff",
		secondary: "#2d2d2d",
		tertiary: "#03A9FC",
		quartenary: "#CECECE",
	},
	{
		primary: "Montserrat",
		secondary: "Helvetica",
	}
);

export default class Presentation extends Component {
	render() {
		return (
			<Deck transitionDuration={500} theme={theme}>
				<Slide transition={["fade"]} bgColor="primary">
					<Heading size={2} fit caps lineHeight={1} textColor="secondary">
						Outro
					</Heading>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary">
					<Heading size={3} lineHeight={2}>
						Стас Чернецкий
					</Heading>
					<Text>Senior Software Engineer and Team Lead</Text>
					<Text>at EPAM Ukraine</Text>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<List>
						<ListItem>Code Quality Gates</ListItem>
						<ListItem>Typed JavaScript - TypeScript and Flow</ListItem>
						<ListItem>Basics of Functional Programming</ListItem>
					</List>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={3}>Качество кода</Heading>
					<Image
						src={
							"http://geekandpoke.typepad.com/.a/6a00d8341d3df553ef017ee884a3f6970d-pi"
						}
						width={450}
						height={600}
					/>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={3}>Качество кода</Heading>
					<Cite>Функциональное</Cite>
					<Cite>Структурное</Cite>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Характеристики хорошего кода</Heading>
					<List>
						<ListItem>Работает</ListItem>
						<ListItem>Легко читается</ListItem>
						<ListItem>DRY, KISS</ListItem>
						<ListItem>легко тестируется</ListItem>
						<ListItem>легко поддерживается</ListItem>
					</List>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Характеристики плохого кода</Heading>
					<List>
						<ListItem>Содержит функциональные дефекты</ListItem>
						<ListItem>Сложно и долго вносить изменения</ListItem>
						<ListItem>Проблемы с производительностью</ListItem>
						<ListItem>Тяжело расширять</ListItem>
					</List>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={3}>Цена бага</Heading>
					<Image
						src={
							"http://systemsemantics.com/wp-content/uploads/2014/07/bug_chart.png"
						}
						width={700}
						height={500}
					/>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Image
						src={
							"http://www.sw-engineering-candies.com/_/rsrc/1470331236673/blog-1/rules-of-thumb-in-software-engineering/cost-of-defect-relative-by-phases.jpg"
						}
						width={700}
						height={500}
					/>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Code Quality Gates</Heading>
					<Image src={images.ccg} width={800} height={300} />
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={3}>Coding standards</Heading>
					<Image
						src={
							"https://i.pinimg.com/originals/55/5a/20/555a2056bd2beb271928a9d1331ef1ce.jpg"
						}
						width={800}
						height={500}
					/>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Style guide</Heading>
					<List>
						<ListItem>Layout of source code</ListItem>
						<ListItem>Indentation between code blocks</ListItem>
						<ListItem>
							Use of white space around operators and keywords
						</ListItem>
						<ListItem>
							Capitalization of classes of keywords and variable names
						</ListItem>
						<ListItem>
							The style and spelling of user-defined identifiers such as
							functions, procedure and variable names
						</ListItem>
						<ListItem>Styling for comments</ListItem>
						<Cite>{"https://github.com/airbnb/javascript"}</Cite>
					</List>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Code Convention</Heading>
					<List>
						<ListItem>File organization</ListItem>
						<ListItem>Project Layout structure</ListItem>
						<ListItem>Commenting</ListItem>
						<ListItem>Declarations of statements</ListItem>
						<ListItem>Programming practices/principles</ListItem>
						<ListItem>Architectural best practices, etc.</ListItem>
					</List>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Tools</Heading>
					<List>
						<ListItem>ES Lint</ListItem>
						<ListItem>JSLint</ListItem>
						<ListItem>JSHint</ListItem>
						<ListItem>JSCS</ListItem>
					</List>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>ES Lint Configuration</Heading>
					<Image src={images.eslint} width={800} height={600} />
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Unit testing</Heading>
					<Image src={images.unit} width={500} height={600} />
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Testing Pyramid</Heading>
					<Image src={images.piramyd} width={1400} height={500} />
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Принципы юнит тестов</Heading>
					<List>
						<ListItem>Fast</ListItem>
						<ListItem>Independent</ListItem>
						<ListItem>Repeatable</ListItem>
						<ListItem>Self-validating</ListItem>
						<ListItem>Timely</ListItem>
					</List>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Image
						src={
							"https://sdtimes.com/wp-content/uploads/2016/12/1209.sdt-github.png"
						}
						width={1400}
						height={500}
					/>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Image src={images.tax} width={700} height={650} />
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Functional Programming</Heading>
					<Image
						src={
							"https://cdn-images-1.medium.com/max/1600/1*AM83LP9sGGjIul3c5hIsWg.png"
						}
						width={1400}
						height={400}
					/>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="secondary">
					<BlockQuote>
						Functional programming (often abbreviated FP) is the process of
						building software by composing pure functions, avoiding shared
						state, mutable data, and side-effects.{" "}
					</BlockQuote>
					<Cite>Eric Elliott</Cite>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Основные принципы</Heading>
					<List>
						<ListItem>Pure functions</ListItem>
						<ListItem>Function composition</ListItem>
						<ListItem>Avoid shared state</ListItem>
						<ListItem>Avoid mutating state</ListItem>
						<ListItem>Avoid side effects</ListItem>
					</List>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={5}>Thank you</Heading>
				</Slide>
			</Deck>
		);
	}
}
