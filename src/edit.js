import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
	TextControl,
	Flex,
	FlexBlock,
	FlexItem,
	Icon,
	Button,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { question, answers, correctAnswer } = attributes;

	const handleUpdateQuestion = (value) => {
		setAttributes({ question: value });
	};

	const handleDeleteAnswer = (indexToDelete) => {
		const newAnswers = answers.filter((_, index) => index !== indexToDelete);
		setAttributes({ answers: newAnswers });

		if (indexToDelete === correctAnswer) {
			setAttributes({ correctAnswer: undefined });
		}
	};

	const handleCorrectAnswer = (index) => {
		setAttributes({ correctAnswer: index });
	};

	return (
		<div {...useBlockProps()}>
			<TextControl
				label={__("Question:")}
				className="question-block"
				value={question}
				onChange={handleUpdateQuestion}
			/>
			<p style={{ fontSize: "14px", margin: "20px 0 8px" }}>Answers:</p>
			{answers.map((answer, index) => (
				<Flex>
					<FlexBlock>
						<TextControl
							autoFocus={answer === undefined}
							value={answer}
							onChange={(newValue) => {
								const newAnswers = [...answers];
								newAnswers[index] = newValue;
								setAttributes({ answers: newAnswers });
							}}
						/>
					</FlexBlock>
					<FlexItem>
						<Button onClick={() => handleCorrectAnswer(index)}>
							<Icon
								icon={correctAnswer === index ? "star-filled" : "star-empty"}
							/>
						</Button>
					</FlexItem>
					<FlexItem>
						<Button
							variant="link"
							className="delete-btn"
							onClick={() => handleDeleteAnswer(index)}
						>
							Delete
						</Button>
					</FlexItem>
				</Flex>
			))}

			<Button
				variant="primary"
				onClick={() => setAttributes({ answers: [...answers, undefined] })}
			>
				Add another answer
			</Button>
		</div>
	);
}
