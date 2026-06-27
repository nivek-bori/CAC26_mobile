import { clr } from "@/lib/styles";
import { Alert, Pressable, StyleSheet, TextInput, View } from "react-native";
import { Camera, Send } from "lucide-react-native";
import { useState } from "react";
import { getImageURIFromUser } from "@/lib/utils/camera";

const MIN_INPUT_HEIGHT = 44;
const MAX_INPUT_HEIGHT = 96;

type ChatTextInputBarProps = {
	onUploadImage: (imageURI: string) => void;
	onPressSend: (message: string) => void;
	placeholder?: string;
};

export function ChatTextInputBar({
	onUploadImage,
	onPressSend,
	placeholder = "Ask TrashAI a question...",
}: ChatTextInputBarProps) {
	const [value, setValue] = useState("");
	const [inputHeight, setInputHeight] = useState(MIN_INPUT_HEIGHT);

	const handleChangeText = (text: string) => {
		if (text.length > 200) {
			Alert.alert(
				"Message too long",
				"Please enter a message with 200 characters or fewer.",
			);
			return;
		}

		setValue(text);
	};

	const handlePressUpload = async () => {
		const imageURI = await getImageURIFromUser();
		if (!imageURI) {
			Alert.alert(
				"No image selected",
				"Please select an image to upload.",
			);
			return;
		}

		onUploadImage(imageURI);
	};

	const handleSend = () => {
		const message = value.trim();

		if (!message) return;

		onPressSend?.(message);
		setValue("");
		setInputHeight(MIN_INPUT_HEIGHT);
	};

	return (
		<View style={styles.container}>
			<Pressable
				accessibilityLabel="Upload image"
				accessibilityRole="button"
				hitSlop={8}
				onPress={handlePressUpload}
				style={styles.uploadButton}
			>
				<Camera color={clr.black} strokeWidth={2.4} size={27}/>
			</Pressable>

			<TextInput
				multiline
				onChangeText={handleChangeText}
				onSubmitEditing={handleSend}
				submitBehavior="submit"
				returnKeyType="send"
				enablesReturnKeyAutomatically
				onContentSizeChange={({ nativeEvent }) => {
					const height = Math.min(
						MAX_INPUT_HEIGHT,
						Math.max(MIN_INPUT_HEIGHT, nativeEvent.contentSize.height),
					);

					setInputHeight(height);
				}}
				placeholder={placeholder}
				placeholderTextColor={clr.gray_dark}
				scrollEnabled={inputHeight >= MAX_INPUT_HEIGHT}
				style={[styles.input, { height: inputHeight }]}
				textAlignVertical="top"
				value={value}
			/>

			<Pressable
				accessibilityLabel="Send message"
				accessibilityRole="button"
				disabled={!value.trim()}
				hitSlop={8}
				onPress={handleSend}
				style={styles.sendButton}
			>
				<Send color={clr.white} />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 36,
		backgroundColor: clr.green_light,
		padding: 14,
		flexDirection: "row",
		alignItems: "flex-end",
		gap: 15,
	},
	uploadButton: {
		width: 44,
		height: 44,
		borderRadius: 22,
		backgroundColor: clr.green_accent_lighter,
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		flex: 1,
		paddingHorizontal: 0,
		paddingVertical: 10,
		fontSize: 18,
		lineHeight: 24,
		borderWidth: 0,
		outlineWidth: 0,
		backgroundColor: "transparent",
	},
	sendButton: {
		width: 44,
		height: 44,
		borderRadius: 22,
		paddingRight: 3,
		backgroundColor: clr.green_accent_darker,
		alignItems: "center",
		justifyContent: "center",
	},
});