// Package podman provides a sqlq.Handler that uses podman
// to execute user-defined pipelines.
package podman

import (
	"context"
	"encoding/json"
	"github.com/google/uuid"
	"github.com/mergestat/sqlq"
	"github.com/pkg/errors"
	"time"
)

// ContainerSync implements a sqlq.Handler that utilizes a Container-based execution environment
// to run user-provided, custom sync jobs.
func ContainerSync() sqlq.Handler {
	return sqlq.HandlerFunc(func(ctx context.Context, job *sqlq.Job) (err error) {
		go job.SendKeepAlive(ctx, job.KeepAlive)

		select {
		case <-ctx.Done():
			return nil
		case <-time.After(30 * time.Second):
		}

		var params struct{ ID uuid.UUID }
		if err = json.Unmarshal(job.Parameters, &params); err != nil {
			return errors.Wrapf(sqlq.ErrSkipRetry, "failed to unmarshal params")
		}

		job.Logger().Infof("running sync %s", params.ID)

		select {
		case <-ctx.Done():
			return nil
		case <-time.After(30 * time.Second):
		}
		return nil
	})
}

// NewContainerSync creates a new sqlq.JobDescription for the given sync id.
func NewContainerSync(id uuid.UUID) *sqlq.JobDescription {
	var params = struct{ ID uuid.UUID }{ID: id}
	var pb, _ = json.Marshal(params)

	return sqlq.NewJobDesc("container/sync", sqlq.WithParameters(pb))
}
