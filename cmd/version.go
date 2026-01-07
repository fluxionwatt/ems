package cmd

import (
	"fmt"

	"github.com/fluxionwatt/ems/version"
	"github.com/spf13/cobra"
)

func init() {
	rootCmd.AddCommand(versionCmd)
}

var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "Print the version number of Hugo",
	Long:  `All software has versions. This is Hugo's`,
	Run: func(_ *cobra.Command, _ []string) {
		fmt.Printf("%v %v/%v(%v)\n", version.ProgramName, version.Version, version.CommitSHA, version.BUILDTIME)
	},
}
