package main

// Archive
type Archive struct {
	ID            string
	name          string
	archiveParent string
	idChannel     string
}

// Array of post and it's archive
var tagArchive []map[string]string

// Create an archive and add it to tagArchive
func createArchive(channelID string, archive Archive) []map[string]string {
	arrayPostArchive := map[string]string{"channel": channelID, "archive": archive.ID}
	tagArchive = append(tagArchive, arrayPostArchive)
	return tagArchive
}
