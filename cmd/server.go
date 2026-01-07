package cmd

import (
	"github.com/fluxionwatt/ems/core"
	"github.com/spf13/cobra"
)

func init() {
	rootCmd.AddCommand(serverCmd)
}

var serverCmd = &cobra.Command{
	Use:   "server",
	Short: "Start the development server",
	Long:  `Start the development server for the application`,
	Run: func(cmd *cobra.Command, args []string) {
		core.Server()
	},
}
