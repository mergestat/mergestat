// Package cron provides some handy routines to run user-provided functions
// at some defined schedule.
package cron

import (
	"context"
	"time"
)

// Basic provides a simple time.Ticker based cron function, that executes the user provided
// function at given intervals. To stop the cron, cancel the provided context.
func Basic(ctx context.Context, dur time.Duration, fn func()) {
	var ticker = time.NewTicker(dur)
	for {
		select {
		case <-ctx.Done():
			ticker.Stop()
			return
		case <-ticker.C:
			fn()
		}
	}
}
