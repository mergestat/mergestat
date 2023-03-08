package client

import (
	"encoding/base64"
	"fmt"
	"golang.org/x/oauth2"
)

type AppPassword struct{ Username, Password string }

func (a *AppPassword) Token() (*oauth2.Token, error) {
	var token = base64.StdEncoding.EncodeToString([]byte(fmt.Sprintf("%s:%s", a.Username, a.Password)))
	return &oauth2.Token{AccessToken: token, TokenType: "basic"}, nil
}
