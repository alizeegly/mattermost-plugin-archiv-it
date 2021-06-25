package main

import (
	"encoding/json"
	"fmt"

	"github.com/mattermost/mattermost-server/v5/plugin"
)

func main() {
	plugin.ClientMain(&Plugin{})

	// Create some tags
	createTag("id_post", "python", "Python")
	createTag("id_post", "dev", "DEV")
	createTag("id_post", "market", "Market")

	// Create an archive
	archive := Archive{"my-courses", "My Courses", "null", "channel"}
	createArchive("channel", archive)

	// Transform the array of tags and posts in Json
	j, err := json.Marshal(tagPost)
	if err != nil {
		fmt.Printf("Error: %s", err.Error())
	} else {
		fmt.Println(string(j))
	}
}
