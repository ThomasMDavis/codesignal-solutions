function htmlEndTagByStartTag(startTag) {
    return "</" + startTag.slice(1, startTag.indexOf(" ")) + ">";
}
