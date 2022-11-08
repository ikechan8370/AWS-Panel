package controller

import (
	"github.com/gin-gonic/gin"
)

func GetSessionId(c *gin.Context) string {
	id := c.GetHeader("loginSession")
	//s := sessions.Default(c)
	//id := s.Get("loginSession")
	//if id == nil {
	//	return ""
	//}
	//return id.(string)
	return id
}
