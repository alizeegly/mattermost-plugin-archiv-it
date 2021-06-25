package main

// Tag
type Tag struct {
	ID   string
	name string
}

// Array of post and it's tag
var tagPost []map[string]string

// Create a tag and add it to tagPost
func createTag(messageID string, tagID string, tagName string) []map[string]string {
	t := Tag{tagID, tagName}
	arrayPostTag := map[string]string{"message": messageID, "tag": t.ID + t.name}
	tagPost = append(tagPost, arrayPostTag)
	return tagPost
}
